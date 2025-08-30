import React, { useState } from "react";
import Counter from "./Counter";
import State from "./State";

const initialCounter = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

const Index = () => {
  const [counters, setCounters] = useState(initialCounter);

  const handleIncreament = (counterId) => {
    const updated = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          count: counter.count + 1,
        };
      }
      return counter;
    });
    setCounters(updated);
  };

  const handleDecreament = (counterId) => {
    const updated = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          count: counter.count - 1,
        };
      }
      return counter;
    });
    setCounters(updated);
  };

  const totalCount = counters.reduce((sum, curr) => sum + curr.count, 0);

  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center items-center flex-col gap-5">
      <div className="space-y-5">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.count}
            increment={() => handleIncreament(counter.id)}
            decrement={() => handleDecreament(counter.id)}
          />
        ))}
      </div>
      <State totalCount={totalCount}/>
    </div>
  );
};

export default Index;
