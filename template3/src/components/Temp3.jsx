import React from "react";
import Header from "./Header";
import Left from "./Left";
import Right from "./Right";

const Temp3 = () => {
  return (
    <>
      <Header />
      <div className="flex justify-evenly">
        <Left />
        <Right />
      </div>
    </>
  );
};

export default Temp3;
