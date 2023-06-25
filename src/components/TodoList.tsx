import {useFragment} from 'react-relay';
import {graphql} from 'relay-runtime';
import {TodoList_user$key} from './__generated__/TodoList_user.graphql';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import useAddTodoMutation from '../mutations/AddTodoMutation';
import TodoFooter from './TodoFooter';
import useChangeTodoStatus from '../mutations/ChangeTodoStatusMutation';
import useRemoveTodoMutation from '../mutations/RemoveTodoMutation';
import {useState} from 'react';
import useMarkAllTodosMutation from '../mutations/MarkAllTodosMutation';

const TodoListFragment = graphql`
  fragment TodoList_user on User {
    todos(first: 2147483647) @connection(key: "TodoList_todos") {
      __id
      edges {
        node {
          id
          ...TodoItemFragment
        }
      }
    }
    totalCount
    completedCount
    userId
    ...TodoFooter_user
  }
`;

export default function TodoList({userRef}: {userRef: TodoList_user$key}) {
  const data = useFragment(TodoListFragment, userRef);

  if (data.todos?.__id == null) {
    throw new Error('Expected todos to have __id');
  }

  const [addTodo] = useAddTodoMutation(data.todos.__id);
  const [commitTodoStatus] = useChangeTodoStatus();

  const submitTodo = (text: string) => {
    addTodo({
      text,
      userId: data.userId,
    });
  };

  const changeTodoStatus = (todoData: {complete: boolean; id: string}) => {
    commitTodoStatus({...todoData, userId: data.userId});
  };

  const [removeTodo] = useRemoveTodoMutation(data.todos.__id);

  const handleRemoveTodo = (id: string) => {
    removeTodo({
      id,
      userId: data.userId,
    });
  };

  const [allSelected, setAllSelected] = useState(false);

  const [markTodosStatus] = useMarkAllTodosMutation();

  const onToggleAll = () => {
    markTodosStatus({complete: !allSelected, userId: data.userId});
    setAllSelected(!allSelected);
  };

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <TodoInput onEnter={submitTodo} />
      </header>

      <section className="main">
        <input
          id="toggle-all"
          type="checkbox"
          className="toggle-all"
          checked={allSelected}
          onChange={onToggleAll}
        />
        <label htmlFor="toggle-all" />
        <ul className="todo-list">
          {data?.todos?.edges?.map((edge) =>
            edge?.node ? (
              <TodoItem
                onToggle={changeTodoStatus}
                onDestroy={handleRemoveTodo}
                key={edge.node.id}
                todoRef={edge.node}
              />
            ) : null,
          )}
        </ul>
      </section>

      <TodoFooter todoConnectionId={data.todos.__id} userRef={data} />
    </>
  );
}
