import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = getTimeRemaining(targetDate);
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, [targetDate]);

  return (
    <div className="flex gap-5 bg-black px-10 py-5 rounded-xl">
      <TimeBox label="days" value={timeLeft.days} />
      <TimeBox label="hours" value={timeLeft.hours} />
      <TimeBox label="min" value={timeLeft.minutes} />
      <TimeBox label="sec" value={timeLeft.seconds} />
    </div>
  );
};

const TimeBox: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="">
    <span className="countdown font-mono text-4xl">
      <span
        style={{ "--value": value } as React.CSSProperties}
        aria-live="polite"
        aria-label={`${value} ${label}`}
      >
        {value}
      </span>
    </span>
    {label}
  </div>
);

// Helper function
function getTimeRemaining(targetDate: Date) {
  const total = Date.parse(targetDate.toString()) - Date.now();
  const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
  const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
  const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
  const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0);

  return { total, days, hours, minutes, seconds };
}

export default CountdownTimer;
