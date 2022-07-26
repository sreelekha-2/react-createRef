import React from 'react';
import { useState, useEffect } from 'react';

export default function MyRef() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = React.createRef();

  const handler = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handler}>Click Me</button>
    </>
  );
}
