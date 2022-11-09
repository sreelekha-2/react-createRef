import React from 'react';
import { useState, useRef } from 'react';

export default function MyRef() {
  const inputEle = useRef();

  const select = useRef();

  const handler = () => {
    console.log(inputEle);
    inputEle.current.focus();
    inputEle.current.style.backgroundColor = 'red';
    inputEle.current.value = 'hello';
    select.current.value = '';
  };

  return (
    <>
      <input type="text" ref={inputEle} />
      <select ref={select}>
        <option>h</option>
      </select>
      <button onClick={handler}>Click Me</button>
    </>
  );
}
