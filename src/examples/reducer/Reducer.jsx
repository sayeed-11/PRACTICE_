import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};

const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="min-h-screen w-full bg-black text-white flex justify-center items-center">
      <div className="p-5 bg-white rounded-2xl text-black space-y-5">
        <h1 className="text-center text-3xl">Count : {count}</h1>
        <div className="space-x-5">
          <button
            onClick={() => dispatch("DEC")}
            className="bg-pink-600 px-5 py-2.5 rounded-xl text-white"
          >
            DECREMENT
          </button>
          <button
            onClick={() => dispatch("INC")}
            className="bg-pink-600 px-5 py-2.5 rounded-xl text-white"
          >
            INCREMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reducer;
