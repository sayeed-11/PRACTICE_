import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "TITLE - 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    id: 2,
    title: "TITLE - 2",
    description:
      "It is a long established fact that a reader will be distracted by the readable content...",
  },
  {
    id: 3,
    title: "TITLE - 3",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority...",
  },
];

const StackCards = () => {
  const [order, setOrder] = useState(data.map((d) => d.id));

  const handleClick = (id) => {
    setOrder((prev) => {
      const newOrder = prev.filter((c) => c !== id);
      return [id, ...newOrder]; // bring clicked card to top
    });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[70vw] h-[500px] relative">
        {order.map((id, index) => {
          const card = data.find((d) => d.id === id);
          const scale = 1 - 0.05 * index; // shrink lower cards more
          const translateY = -40 * index; // push down lower cards

          return (
            <div
              key={card.id}
              onClick={() => handleClick(card.id)}
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
                zIndex: data.length - index,
              }}
              className="absolute w-full h-full bg-white border-2 border-red-500 rounded-xl shadow-xl flex flex-col justify-center items-center text-black font-bold gap-y-5 p-10 cursor-pointer transition-all duration-500 ease-in-out"
            >
              <h1 className="text-[3vw]">{card.title}</h1>
              <p className="text-base text-center">{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StackCards;
