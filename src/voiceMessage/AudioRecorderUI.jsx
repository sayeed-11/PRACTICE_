import React, { useState, useRef } from "react";

const AudioRecorderUI = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [bars, setBars] = useState(new Array(20).fill(5));
  const [duration, setDuration] = useState("0:00");
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);
  const startTimeRef = useRef(null);
  const timerRef = useRef(null);

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
      startTimeRef.current = Date.now();

      // Timer for recording duration
      timerRef.current = setInterval(() => {
        const diff = Math.floor((Date.now() - startTimeRef.current) / 1000);
        const min = Math.floor(diff / 60);
        const sec = diff % 60;
        setDuration(`${min}:${sec < 10 ? "0" + sec : sec}`);
      }, 1000);

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
    clearInterval(timerRef.current);
    setIsRecording(false);
    setBars(new Array(20).fill(8)); // Reset to static bars after recording
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {!audioURL ? (
        // Recording UI
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
          <span className="text-gray-700 text-sm">{duration}</span>
        </div>
      ) : (
        // Recorded Audio UI (like your image)
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-[340px] justify-between">
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

          {/* Static waveform */}
          <div className="flex-1 flex items-center mx-3">
            {bars.map((h, i) => (
              <div
                key={i}
                className={`w-1 rounded mx-[1px] ${
                  i < 6 ? "bg-blue-500" : "bg-gray-400"
                }`}
                style={{ height: `${h}px` }}
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
      )}
    </div>
  );
};

export default AudioRecorderUI;
