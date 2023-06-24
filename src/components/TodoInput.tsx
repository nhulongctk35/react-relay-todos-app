import {useEffect, useRef, useState} from 'react';

type TodoInputProps = {
  onEnter: (text: string) => void;
};

export default function TodoInput({onEnter}: TodoInputProps) {
  const [text, setText] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (input != null) {
      input.focus();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && text.length) {
      onEnter(text);
      setText('');
    }
  };

  return (
    <input
      ref={inputRef}
      className="new-todo"
      placeholder="What needs to be done?"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}
