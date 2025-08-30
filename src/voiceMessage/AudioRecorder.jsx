import React, { useState, useRef, useEffect } from "react";

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [bars, setBars] = useState(new Array(20).fill(5));
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  // Start Recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunks.current = [];

      mediaRecorder.ondataavailable = (e) => {
        audioChunks.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/mp3" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
      };

      mediaRecorder.start();
      setIsRecording(true);

      // Animate waveform while recording
      const interval = setInterval(() => {
        setBars(bars.map(() => Math.floor(Math.random() * 25) + 5));
      }, 200);
      mediaRecorderRef.current.interval = interval;

    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  // Stop Recording
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    clearInterval(mediaRecorderRef.current.interval);
    setIsRecording(false);
    setBars(new Array(20).fill(5));
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* Recording UI */}
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-[320px]">
        {/* Button */}
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow"
        >
          {isRecording ? (
            <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="blue"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Waveform */}
        <div className="flex-1 flex items-center mx-3">
          {bars.map((h, i) => (
            <div
              key={i}
              className="w-1 rounded bg-blue-500 mx-[1px]"
              style={{ height: `${h}px` }}
            ></div>
          ))}
        </div>

        {/* Timer */}
        <span className="text-gray-700 text-sm">{isRecording ? "Rec..." : "0:00"}</span>
      </div>

      {/* Play Recorded Audio */}
      {audioURL && (
        <audio controls src={audioURL} className="mt-3 w-[320px]"></audio>
      )}
    </div>
  );
};

export default AudioRecorder;
