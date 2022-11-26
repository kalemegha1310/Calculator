import React, { useState } from "react";
import "./Button.css";
import Card from "./Card";
import Logic from "./Logic";

const Button = () => {
  const [num, setNum] = useState("0");

  const UpdateData = (e) => {
    if (num.includes(".") && e.target.value === ".") return;

    if (num.length < 20 && num != 0) {
      setNum(num.concat(e.target.value));
    } else {
      setNum(e.target.value);
    }
  };
  const clear = () => {
    setNum("0");
  };

  const backspace = () => {
    setNum(num.slice(0, num.length - 1));
  };

  const invert = () => {
    setNum(-num);
  };

  const calculate = () => {
    setNum(eval(num).toString());
  };

  const persenteg = (e) => {
      setNum(num / 100); 
  };

 
  return (
    <Card>
      <input className="inp" value={num}></input>

      <div className="but">
        <button className="button" onClick={clear}>
          AC
        </button>
        <button className="button" onClick={invert}>
          +/-
        </button>
        <button className="button" onClick={persenteg} value="%">
          %
        </button>
        <button className="button" onClick={UpdateData} value="/">
          /
        </button>
        <button className="button" onClick={UpdateData} value="7">
          7
        </button>
        <button className="button" onClick={UpdateData} value="8">
          8
        </button>
        <button className="button" onClick={UpdateData} value="9">
          9
        </button>
        <button className="button" onClick={UpdateData} value="*">
          *
        </button>
        <button className="button" onClick={UpdateData} value="4">
          4
        </button>
        <button className="button" onClick={UpdateData} value="5">
          5
        </button>
        <button className="button" onClick={UpdateData} value="6">
          6
        </button>
        <button className="button" onClick={UpdateData} value="-">
          -
        </button>
        <button className="button" onClick={UpdateData} value="1">
          1
        </button>
        <button className="button" onClick={UpdateData} value="2">
          2
        </button>
        <button className="button" onClick={UpdateData} value="3">
          3
        </button>
        <button className="button" value="+" onClick={UpdateData}>
          +
        </button>
        <button className="button " onClick={UpdateData} value="0">
          0
        </button>
        <button className="button" onClick={backspace} value="C">
          C
        </button>
        <button className="button" onClick={UpdateData} value=".">
          .
        </button>
        <button className="button" onClick={calculate} value="=">
          =
        </button>
      </div>
     
    </Card>
  );
};

export default Button;
