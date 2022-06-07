import React, { Component } from 'react'




export default class Calc extends Component {
  render() {
    function calc() {
      var a = parseInt(document.querySelector("#value1").value);
      var b = parseInt(document.querySelector("#value2").value);
      var op = document.querySelector("#operator").value;
      var calculate;
      if (op === "add") {
        calculate = a + b;
      } else if (op === "min") {
        calculate = a - b;
      } else if (op === "div") {
        calculate = a / b;
      } else if (op === "mul") {
        calculate = a * b;
      }
      document.querySelector("#result").innerHTML = calculate;
    }
    return (
      <div>
      <form>
      <div className='input-container ic1' />
        <div><input placeholder="Value 1" className="input" type="text" id="value1" />    
      </div>
      <div className='input-container ic2' />
        <div><input placeholder="Value 2" className="input" type="text" id="value2" />   
      </div>
      <div className="drop-down">
        <select className="selector" id="operator">
          <option value="add">Add</option>
          <option value="min">Minus</option>
          <option value="div">Divide</option>
          <option value="mul">Multiply</option>
        </select> 
      </div>
        <div>
          <button className="submit" type="button" onClick={calc}>Calculate</button>
        </div>
        <div className="result" id="result"></div>   
    </form>
    </div>
    )
  }
}
