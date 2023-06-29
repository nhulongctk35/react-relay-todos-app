import classNames from 'classnames';
import {useFragment} from 'react-relay';
import {graphql} from 'relay-runtime';
import {TodoItemFragment$key} from './__generated__/TodoItemFragment.graphql';

interface TodoItemProps extends React.ComponentPropsWithoutRef<'li'> {
  todoRef: TodoItemFragment$key;
  editing?: boolean;
  onToggle: (data: {complete: boolean; id: string}) => void;
  onDestroy: (todoId: string) => void;
  handleEdit?: () => void;
}

const TodoItemFragment = graphql`
  fragment TodoItemFragment on Todo {
    id
    text
    complete
  }
`;

export default function TodoItem({
  todoRef,
  editing,
  onToggle,
  onDestroy,
  handleEdit,
  className,
  ...props
}: TodoItemProps) {
  const data = useFragment(TodoItemFragment, todoRef);

  return (
    <li
      {...props}
      className={classNames(className, {
        completed: data.complete,
        editing: editing,
      })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={data.complete}
          readOnly
          onChange={() => onToggle({complete: !data.complete, id: data.id})}
        />
        <label onDoubleClick={handleEdit}>{data.text}</label>
        <button className="destroy" onClick={() => onDestroy(data.id)} />
      </div>
    </li>
  );
}
