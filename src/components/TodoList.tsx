import {useFragment, useMutation, useRefetchableFragment} from 'react-relay';
import {graphql} from 'relay-runtime';
import {TodoList_user$key} from './__generated__/TodoList_user.graphql';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import useTodoMutation from '../mutations/AddTodoMutation';

const TodoListFragment = graphql`
  fragment TodoList_user on User {
    todos(first: 10) @connection(key: "TodoList_todos") {
      __id
      edges {
        node {
          id
          ...TodoItemFragment
        }
      }
    }
    userId
  }
`;

export default function TodoList({userRef}: {userRef: TodoList_user$key}) {
  const data = useFragment(TodoListFragment, userRef);

  const [addTodo] = useTodoMutation();

  const submitTodo = (text: string) => {
    addTodo(
      {
        text,
        userId: data.userId,
      },
      data.todos?.__id,
    );
  };

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <TodoInput onEnter={submitTodo} />
      </header>

      <section className="main">
        {/* <input
          id="toggle-all"
          type="checkbox"
          className="toggle-all"
            checked={allSelected}
            onChange={onToggleAll}
        />
        <label htmlFor="toggle-all" /> */}
        <ul className="todo-list">
          {data?.todos?.edges?.map(({node}) =>
            node ? <TodoItem key={node.id} todoRef={node} /> : null,
          )}
        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          {/* <strong>{left}</strong> items left */}
        </span>
        {/* <ul className="filters">
          <li>
            <NavLink exact={true} to="/" activeClassName="selected">
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/active" activeClassName="selected">
              Active
            </NavLink>
          </li>
          <li>
            <NavLink to="/completed" activeClassName="selected">
              Completed
            </NavLink>
          </li>
        </ul>
        {anyDone && (
          <button className="clear-completed" onClick={onClearCompleted}>
            Clear completed
          </button>
        )} */}
      </footer>
    </>
  );
}
