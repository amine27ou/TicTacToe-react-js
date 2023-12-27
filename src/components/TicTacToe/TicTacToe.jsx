import React, { useRef, useState } from "react";
import circle from "./Assets/circle.png";
import cross from "./Assets/cross.png";

export default function TicTacToe() {
  let [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  const boxesRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  function toggle(e, num) {
    if (lock) {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src=${cross} />`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src=${circle} />`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  }

  function checkWin() {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  }

  function won(winner) {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = "Congratulations X";
    } else {
      titleRef.current.innerHTML = "Congratulations O";
    }
  }

  function reset() {
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    titleRef.current.innerHTML = '';
    boxesRef.forEach(box=>box.current.innerHTML='')
  }

  return (
    <div className="container">
      <h1 style={{color:'white'}} ref={titleRef}></h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            ref={boxesRef[0]}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            ref={boxesRef[1]}
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            ref={boxesRef[2]}
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            ref={boxesRef[3]}
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            ref={boxesRef[4]}
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            ref={boxesRef[5]}
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            ref={boxesRef[6]}
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            ref={boxesRef[7]}
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            ref={boxesRef[8]}
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
