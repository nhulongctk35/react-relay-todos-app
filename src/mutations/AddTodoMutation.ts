import {useCallback} from 'react';
import {useMutation} from 'react-relay';
import {graphql} from 'relay-runtime';

const mutation = graphql`
  mutation AddTodoMutation($connections: [ID!]!, $input: AddTodoInput!) {
    addTodo(input: $input) {
      todoEdge @prependEdge(connections: $connections) {
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

export default function useAddTodoMutation(connectionId: string) {
  const [commit] = useMutation(mutation);

  const addTodo = useCallback(
    (input: {text: string; userId: string}) => {
      commit({
        variables: {
          connections: [connectionId],
          input,
        },
      });
    },
    [commit, connectionId],
  );

  return [addTodo];
}
