import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-[80%] max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
        <ReactPlayer
          url="https://assets.mixkit.co/my1a9nwrvj7nls2jpta627j2c2ls"
          controls
          playing
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
