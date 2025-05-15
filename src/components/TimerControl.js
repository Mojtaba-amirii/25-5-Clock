import { useEffect, useRef } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { toggleRunning, reset, tick } from "../features/clockSlice";

const TimerControl = () => {
  const { isRunning, timeLeft } = useSelector((state) => state.clock);
  const dispatch = useDispatch();
  const beepAudio = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => dispatch(tick()), 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, dispatch]);

  useEffect(() => {
    if (timeLeft === 0 && beepAudio.current) {
      beepAudio.current.play();
    }
  }, [timeLeft]);

  const handleReset = () => {
    dispatch(reset());
    if (beepAudio.current) {
      beepAudio.current.pause();
      beepAudio.current.currentTime = 0;
    }
  };

  return (
    <div id="timer-control" className="text-center mt-4">
      <ButtonGroup>
        <Button
          id="start_stop"
          variant={isRunning ? "danger" : "success"}
          onClick={() => dispatch(toggleRunning())}
        >
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button id="reset" variant="warning" onClick={handleReset}>
          Reset
        </Button>
      </ButtonGroup>
      <audio
        id="beep"
        ref={beepAudio}
        preload="auto"
        src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
};

export default TimerControl;
