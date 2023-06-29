import {useFragment} from 'react-relay';
import {graphql} from 'relay-runtime';
import {TodoFooter_user$key} from './__generated__/TodoFooter_user.graphql';
import useRemoveCompletedTodosMutation from '../mutations/RemoveCompletedTodosMutation';
import classNames from 'classnames';

const todoFooterFragment = graphql`
  fragment TodoFooter_user on User {
    userId
    totalCount
    completedCount
  }
`;
interface TodoFooterProps extends React.ComponentPropsWithoutRef<'footer'> {
  userRef: TodoFooter_user$key;
  todoConnectionId: string;
}

export default function TodoFooter({
  userRef,
  todoConnectionId,
  className,
  ...props
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
    <footer className={classNames(className, 'footer')} {...props}>
      <span className="todo-count">
        <strong>{left}</strong> items left
      </span>
      {anyDone && (
        <button className="clear-completed" onClick={clearComplete}>
          Clear completed
        </button>
      )}
    </footer>
  );
}
