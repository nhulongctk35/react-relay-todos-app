import {useFragment} from 'react-relay';
import {graphql} from 'relay-runtime';
import {TodoFooter_user$key} from './__generated__/TodoFooter_user.graphql';
import useRemoveCompletedTodosMutation from '../mutations/RemoveCompletedTodosMutation';

const todoFooterFragment = graphql`
  fragment TodoFooter_user on User {
    userId
    totalCount
    completedCount
  }
`;
type TodoFooterProps = {
  userRef: TodoFooter_user$key;
  todoConnectionId: string;
};

export default function TodoFooter({
  userRef,
  todoConnectionId,
}: TodoFooterProps) {
  const data = useFragment(todoFooterFragment, userRef);
  const left = data.totalCount - data.completedCount;
  const anyDone = data.completedCount > 0;

  const [removeCompletedTodos] = useRemoveCompletedTodosMutation(
    data.userId,
    todoConnectionId,
  );
  const clearComplete = () => {
    removeCompletedTodos();
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{left}</strong> items left
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
        </ul> */}
      {anyDone && (
        <button className="clear-completed" onClick={clearComplete}>
          Clear completed
        </button>
      )}
    </footer>
  );
}
