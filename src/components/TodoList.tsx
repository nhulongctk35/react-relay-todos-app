import {useFragment} from 'react-relay';
import {graphql} from 'relay-runtime';
import {TodoList_user$key} from './__generated__/TodoList_user.graphql';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import useAddTodoMutation from '../mutations/AddTodoMutation';
import TodoFooter from './TodoFooter';
import useChangeTodoStatus from '../mutations/ChangeTodoStatusMutation';
import useRemoveTodoMutation from '../mutations/RemoveTodoMutation';
import {useRef, useState} from 'react';
import useMarkAllTodosMutation from '../mutations/MarkAllTodosMutation';
import React from 'react';

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

interface TodoListProps extends React.ComponentPropsWithoutRef<'section'> {
  userRef: TodoList_user$key;
}

export default function TodoList({userRef}: TodoListProps) {
  const data = useFragment(TodoListFragment, userRef);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const onToggleAll = (event: React.SyntheticEvent) => {
    event.preventDefault();

    markTodosStatus({complete: !allSelected, userId: data.userId});

    setAllSelected(!allSelected);
  };

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <TodoInput
          ref={inputRef}
          placeholder="What needs to be done? from parent"
          className="todo-input"
          onEnter={submitTodo}
        />
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
                className="todo-item"
                onToggle={changeTodoStatus}
                onDestroy={handleRemoveTodo}
                key={edge.node.id}
                todoRef={edge.node}
              />
            ) : null,
          )}
        </ul>
      </section>

      <TodoFooter
        className="bg-red"
        todoConnectionId={data.todos.__id}
        userRef={data}
      />
    </>
  );
}
