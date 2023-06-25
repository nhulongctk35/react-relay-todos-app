import {useCallback} from 'react';
import {useMutation} from 'react-relay';
import {graphql} from 'relay-runtime';
import {RemoveTodoInput} from './__generated__/RemoveTodoMutation.graphql';

const mutation = graphql`
  mutation RemoveTodoMutation($input: RemoveTodoInput!, $connectionId: ID!) {
    removeTodo(input: $input) {
      deletedTodoId @deleteEdge(connections: [$connectionId])
      user {
        id
        totalCount
      }
    }
  }
`;

export default function useRemoveTodoMutation(connectionId: string) {
  const [commit] = useMutation(mutation);

  const removeTodo = ({id, userId}: RemoveTodoInput) => {
    commit({
      variables: {
        input: {
          id,
          userId,
        },
        connectionId,
      },
      configs: [
        {
          type: 'NODE_DELETE',
          deletedIDFieldName: 'deletedTodoId',
        },
      ],
      optimisticResponse: {
        removeTodo: {
          deletedTodoId: id,
          user: {
            id: userId,
            totalCount: 0,
          },
        },
      },
    });
  };

  const commitRemove = useCallback(removeTodo, [commit, connectionId]);

  return [commitRemove];
}
