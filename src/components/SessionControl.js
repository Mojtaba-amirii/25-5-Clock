import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup, Card } from "react-bootstrap";

import { incrementSession, decrementSession } from "../features/clockSlice";

const SessionControl = () => {
  const sessionLength = useSelector((state) => state.clock.sessionLength);
  const dispatch = useDispatch();

  return (
    <Card className="text-center">
      <Card.Body>
        <h3 id="session-label">Session Length</h3>
        <ButtonGroup aria-label="Session controls">
          <Button
            id="session-decrement"
            variant="outline-primary"
            onClick={() => dispatch(decrementSession())}
          >
            -
          </Button>
          <span id="session-length" className="mx-3 h4">
            {sessionLength}
          </span>
          <Button
            id="session-increment"
            variant="outline-primary"
            onClick={() => dispatch(incrementSession())}
          >
            +
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default SessionControl;
