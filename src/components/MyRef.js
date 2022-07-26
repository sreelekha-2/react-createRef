import React from 'react';
import { useState, useRef } from 'react';

export default function MyRef() {
  const inputEle = useRef();

  const handler = () => {
    console.log(inputEle);
    inputEle.current.focus();
    inputEle.current.style.backgroundColor = 'red';
  };

  return (
    <>
      <input type="text" ref={inputEle} />
      <button onClick={handler}>Click Me</button>
    </>
  );
}
