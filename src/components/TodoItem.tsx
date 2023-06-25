import classNames from 'classnames';
import {useFragment} from 'react-relay';
import {graphql} from 'relay-runtime';
import {TodoItemFragment$key} from './__generated__/TodoItemFragment.graphql';

type TodoItemProps = {
  todoRef: TodoItemFragment$key;
  editing?: boolean;
  onToggle: (data: {complete: boolean; id: string}) => void;
  onDestroy: (todoId: string) => void;
  handleEdit?: () => void;
};

const TodoItemFragment = graphql`
  fragment TodoItemFragment on Todo {
    id
    text
    complete
  }
`;

export default function TodoItem(props: TodoItemProps) {
  const data = useFragment(TodoItemFragment, props.todoRef);

  return (
    <li
      className={classNames({
        completed: data.complete,
        editing: props.editing,
      })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={data.complete}
          readOnly
          onChange={() =>
            props.onToggle({complete: !data.complete, id: data.id})
          }
        />
        <label onDoubleClick={props.handleEdit}>{data.text}</label>
        <button className="destroy" onClick={() => props.onDestroy(data.id)} />
      </div>
      {/* <input
                ref="editField"
                className="edit"
                value={this.state.editText}
                onBlur={this.handleSubmit}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
            /> */}
    </li>
  );
}
