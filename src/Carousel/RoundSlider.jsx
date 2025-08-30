import React from "react";

const items = [
  "https://i.pinimg.com/736x/ae/e3/0f/aee30f63c51884b081e05a4363ee83fd.jpg",
  "https://i.pinimg.com/736x/19/e3/7f/19e37fceeb0f75376251c1f3f66d4897.jpg",
  "https://i.pinimg.com/736x/ad/ab/e2/adabe2df5445f9de435e19d6adbb9604.jpg",
  "https://i.pinimg.com/736x/39/bd/ce/39bdce5adb39de7f9039c7b802a47c4b.jpg",
  //   "https://i.pinimg.com/736x/ef/77/c2/ef77c21f137e470b5cad0844d3aae505.jpg",
  //   "https://i.pinimg.com/736x/10/de/3b/10de3bbf67c0a2760dcba8121bc82b85.jpg",

  //   "https://i.pinimg.com/736x/ae/e3/0f/aee30f63c51884b081e05a4363ee83fd.jpg",
  //   "https://i.pinimg.com/736x/19/e3/7f/19e37fceeb0f75376251c1f3f66d4897.jpg",
  //   "https://i.pinimg.com/736x/ad/ab/e2/adabe2df5445f9de435e19d6adbb9604.jpg",
  //   "https://i.pinimg.com/736x/39/bd/ce/39bdce5adb39de7f9039c7b802a47c4b.jpg",
  //   "https://i.pinimg.com/736x/ef/77/c2/ef77c21f137e470b5cad0844d3aae505.jpg",
  //   "https://i.pinimg.com/736x/10/de/3b/10de3bbf67c0a2760dcba8121bc82b85.jpg",
];

const RoundSlider = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-2">
      <Images />
    </div>
  );
};

export default RoundSlider;

const Images = () => {
  const centerX = 100;
  const centerY = 100;
  const angleStep = (2 * Math.PI) / items.length;
  const radius = 210;
  return (
    <div className="relative">
      <section className="bg-white/5 flex justify-center items-center absolute bottom-0 left-[200px]">
        <div className="w-[200px] aspect-square relative rotate-[-90deg]">
          {items.map((url, index) => {
            const angle = index * angleStep;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            return (
              <div
                style={{
                  position: "absolute",
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: "translate(-50%, -50%) rotate(90deg)", // center alignment
                  padding: "10px",
                  background: "lightblue",
                  borderRadius: "50%",
                  textAlign: "center",
                }}
                className="absolute w-full h-full rounded-full overflow-hidden flex justify-center items-center"
              >
                <img
                  className="w-full h-full rounded-full absolute object-cover"
                  src={url}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
