import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Timer = () => {
  const { timerLabel, timeLeft } = useSelector((state) => state.clock);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <Card className="text-center bg-dark text-white">
      <Card.Body>
        <h2 id="timer-label">{timerLabel}</h2>
        <div id="time-left" className="display-3">
          {formatTime(timeLeft)}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Timer;
