import {useCallback} from 'react';
import {useMutation} from 'react-relay';
import {graphql} from 'relay-runtime';

const mutation = graphql`
  mutation RemoveCompletedTodosMutation(
    $input: RemoveCompletedTodosInput!
    $connectionId: ID!
  ) {
    removeCompletedTodos(input: $input) {
      deletedTodoIds @deleteEdge(connections: [$connectionId])
      user {
        id
        completedCount
        totalCount
      }
    }
  }
`;

export default function useRemoveCompletedTodosMutation(
  userId: string,
  connectionId: string,
) {
  const [commit] = useMutation(mutation);

  const clearComplete = useCallback(() => {
    commit({
      variables: {
        input: {userId},
        connectionId,
      },
    });
  }, [commit, userId, connectionId]);

  return [clearComplete];
}
