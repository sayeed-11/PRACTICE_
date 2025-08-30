import React from "react";

const AudioMessage = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-[320px]">
      {/* Play Button */}
      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="blue"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>

      {/* Waveform */}
      <div className="flex-1 flex items-center mx-3">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`w-1 rounded bg-blue-500 mx-[1px]`}
            style={{
              height: `${Math.random() * (20 - 5) + 5}px`,
              opacity: i < 6 ? 1 : 0.4,
            }}
          ></div>
        ))}
      </div>

      {/* Timer & Profile */}
      <div className="flex items-center gap-2">
        <span className="text-gray-700 text-sm">1:21</span>
        <div className="relative w-8 h-8">
          <img
            src="https://via.placeholder.com/32"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="absolute bottom-0 right-0 bg-blue-500 w-3 h-3 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-2 h-2"
            >
              <path d="M12 15c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3S9 5.346 9 7v5c0 1.654 1.346 3 3 3z" />
              <path d="M19 11v1c0 3.309-2.691 6-6 6s-6-2.691-6-6v-1H5v1c0 4.08 3.06 7.44 7 7.93V22h2v-2.07c3.94-.49 7-3.85 7-7.93v-1h-2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioMessage;
