import {useCallback} from 'react';
import {graphql, useMutation} from 'react-relay';

const mutation = graphql`
  mutation ChangeTodoStatusMutation($input: ChangeTodoStatusInput!) {
    changeTodoStatus(input: $input) {
      todo {
        complete
      }
      user {
        id
        completedCount
        totalCount
      }
    }
  }
`;

export default function useChangeTodoStatus() {
  const [commit] = useMutation(mutation);

  const changeTodoStatus = useCallback(
    (input: {complete: boolean; id: string; userId: string}) => {
      commit({
        variables: {
          input,
        },
      });
    },
    [commit],
  );

  return [changeTodoStatus];
}
