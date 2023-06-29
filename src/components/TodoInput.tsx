import classNames from 'classnames';
import React from 'react';
import {useState} from 'react';

interface TodoInputProps extends React.ComponentPropsWithoutRef<'input'> {
  onEnter(text: string): void;
}

const TodoInput = React.forwardRef<HTMLInputElement, TodoInputProps>(
  ({onEnter, className, ...props}, forwardRef) => {
    const [text, setText] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13 && text.length) {
        onEnter(text);
        setText('');
      }
    };

    return (
      <input
        {...props}
        ref={forwardRef}
        className={classNames('new-todo', className)}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    );
  },
);

export default TodoInput;
