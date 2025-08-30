import React, { useReducer } from "react";

const initialState = { counter: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + action.value };
    case "DEC":
      return { ...state, counter: state.counter - action.value };
    default:
      return state;
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="min-h-screen w-full bg-black text-white flex justify-center items-center">
      <div className="p-5 bg-white rounded-2xl text-black space-y-5">
        <h1 className="text-center text-3xl">Count : {count.counter}</h1>
        <div className="gap-5 grid grid-cols-2">
          <button
            onClick={() => dispatch({ type: "DEC", value: 1 })}
            className="bg-pink-600 px-5 py-2.5 rounded-xl text-white"
          >
            DECREMENT
          </button>
          <button
            onClick={() => dispatch({ type: "INC", value: 1 })}
            className="bg-pink-600 px-5 py-2.5 rounded-xl text-white"
          >
            INCREMENT
          </button>
          <button
            onClick={() => dispatch({ type: "DEC", value: 5 })}
            className="bg-pink-600 px-5 py-2.5 rounded-xl text-white"
          >
            DECREMENT BY 5
          </button>
          <button
            onClick={() => dispatch({ type: "INC", value: 5 })}
            className="bg-pink-600 px-5 py-2.5 rounded-xl text-white"
          >
            INCREMENT BY 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplexCounter;
