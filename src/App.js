import React, { useState, useCallback } from "react";

function App() {
  const listStudent = ["Huyen", "Hoa", "Hung", "Long"];

  const useAction = () => {
    const [position, setPosition] = useState(0);

    const increase = useCallback(() => {
      if (position !== listStudent.length - 1) setPosition(position + 1);
      else setPosition(0);
    }, [position]);
    const decrease = useCallback(() => {
      if (position !== 0) setPosition(position - 1);
      else setPosition(listStudent.length - 1);
    }, [position]);

    return [position, { increase, decrease }];
  };

  const [position, { increase, decrease }] = useAction();
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