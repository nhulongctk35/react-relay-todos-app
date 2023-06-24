import {useFragment, useMutation, useRefetchableFragment} from 'react-relay';
import {graphql} from 'relay-runtime';
import {TodoList_user$key} from './__generated__/TodoList_user.graphql';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

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

const TodoListAddTodoMutation = graphql`
  mutation TodoListAddTodoMutation(
    $connections: [ID!]!
    $input: AddTodoInput!
  ) {
    addTodo(input: $input) {
      todoEdge @appendEdge(connections: $connections) {
        node {
          id
          ...TodoItemFragment
        }
      }
      user {
        id
        totalCount
      }
    }
  }
`;

export default function TodoList({userRef}: {userRef: TodoList_user$key}) {
  const data = useFragment(TodoListFragment, userRef);
  console.log('@data', data);

  const [addTodo] = useMutation(TodoListAddTodoMutation);

  const submitTodo = (text: string) => {
    console.log('@submitTodo', data?.todos?.__id);

    addTodo({
      variables: {
        input: {
          text,
          userId: data.userId,
        },
        connections: [data?.todos?.__id],
      },
    });
    // console.log(text);
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
