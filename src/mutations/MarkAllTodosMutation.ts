import {useCallback} from 'react';
import {useMutation} from 'react-relay';
import {graphql} from 'relay-runtime';

const mutation = graphql`
  mutation MarkAllTodosMutation($input: MarkAllTodosInput!) {
    markAllTodos(input: $input) {
      changedTodos {
        id
        complete
      }
      user {
        id
        completedCount
      }
    }
  }
`;

export default function useMarkAllTodosMutation() {
  const [commit] = useMutation(mutation);

  const markAllTodos = useCallback(
    (input: MarkAllTodosInput) => {
      commit({
        variables: {
          input,
        },
        optimisticUpdater: (store) => {
          const user = store.get(input.userId);
          //   const todos = user.getLinkedRecords('todos');
          //   todos.forEach((todo) => {
          //     todo.setValue(input.complete, 'complete');
          //   });
        },
      });
    },
    [commit],
  );

  return [markAllTodos];
}
