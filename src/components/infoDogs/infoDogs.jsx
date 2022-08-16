import { useState } from "react";
import React from "react";
import "./index.css";

const InfoDogs = (props) => {
  const [name, setName] = useState("");
  const [describe, setDescribe] = useState("");
  const [evaluate, setEvaluate] = useState("");

  const handName = (e) => {
    setName(e.target.value);
  };
  const handDescribe = (e) => {
    setDescribe(e.target.value);
  };
  const handEvaluate = (e) => {
    setEvaluate(e.target.value);
  };
  const handInfo = (e) => {
    e.preventDefault();
    const infoValue = {
      name: name,
      describe: describe,
      evaluate: evaluate,
    };
    props.handValue(infoValue);
    setName("");
    setDescribe("");
    setEvaluate("");
  };

  return (
    <div className="infoDog">
      <div className="infoDog--title">
        <p>
          Name: <span className="infoDog--title__color">{props.name}</span>
        </p>
        <p>
          Describe:{" "}
          <span className="infoDog--title__color">{props.describe}</span>
        </p>
        <p>
          Star: <span className="color--red">{props.evaluate}</span>
        </p>
      </div>
      <div className="infoDog--setName">
        <h2 className="setName">Name the dog</h2>
        <form action="" className="infoDog--from" onSubmit={handInfo}>
          <label htmlFor="name" className="input_value">
            Name:{""}
            <input
              type="text"
              id="name"
              onChange={handName}
              value={name}
              minLength={3}
              maxLength={8}
              required
            />
          </label>
          <br />
          <label htmlFor="describe" className="input_value">
            Describe:{""}
            <input
              type="text"
              id="describe"
              value={describe}
              onChange={handDescribe}
              minLength={4}
              maxLength={20}
              required
            />
          </label>
          <br />
          <label htmlFor="cars" className="input_value">
            Choose a evaluate:{" "}
            <select
              value={evaluate}
              id="cars"
              onChange={handEvaluate}
              required
              defaultValue={"*"}
            >
              <option value="*">*</option>
              <option value="**">**</option>
              <option value="***">***</option>
              <option value="****">****</option>
            </select>
          </label>
          <br />
          <button className="infoDog--btn">Change</button>
        </form>
      </div>
    </div>
  );
};

export default InfoDogs;
