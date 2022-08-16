import React, { useState } from "react";

import "./App.css";
import DisplayDog from "./components/Displays/displayDog";
import InfoDogs from "./components/infoDogs/infoDogs";
import Loading from "./components/Loading/loading";

const App = () => {
  const innitInfo = {
    name: "No name",
    describe: "No describe",
    evaluate: "No evaluate",
  };
  const [src, setsrc] = useState("");
  const [info, setInfo] = useState(innitInfo);
  const getApi123 = () => {
    setInfo(innitInfo);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setsrc(data.message));
    // .catch((err) => {
    //   console.log(err);
    // });
  };
  const setInFoValue = (value) => {
    setInfo(value);
  };
  return (
    <div className="container">
      {src === "" ? (
        <Loading />
      ) : (
        <>
          <DisplayDog src={src} />
          <InfoDogs
            name={info.name}
            evaluate={info.evaluate}
            describe={info.describe}
            handValue={setInFoValue}
          />
        </>
      )}
      <button className="btn" onClick={getApi123}>
        Get Dogs
      </button>
    </div>
  );
};

export default App;
