import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="bg-white text-black p-5 rounded-2xl flex flex-col justify-center items-center gap-5">
      <Count count={count} />
      <div className="grid grid-cols-2 gap-5">
        <Button handleClick={decrement}>Decreament</Button>
        <Button handleClick={increment}>Increament</Button>
      </div>
    </div>
  );
};

export default Counter;
