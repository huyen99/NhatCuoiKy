import React, { useState, useCallback } from "react";
import {useAction} from './customhook'
function App() {
  const listStudent = ["Huyen", "Hoa", "Hung", "Long"];
  const [position, { increase, decrease }] = useAction(listStudent);
  return (
    <div className="main">
      <div className="list-student">
        <p>学生一覧：[{listStudent.toString()}]</p>
      </div>
      <div className="position">位置：{position + 1}</div>
      <div className="name">
        <p>名前：{listStudent[position]}</p>
      </div>
      <div className="action">
        <button className="action-increase" onClick={increase}>
          次に
        </button>
        <button onClick={decrease}>前に</button>
      </div>
    </div>
  );
}

export default App;