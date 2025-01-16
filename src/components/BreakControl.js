import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup, Card } from "react-bootstrap";

import { incrementBreak, decrementBreak } from "../features/clockSlice";

const BreakControl = () => {
  const breakLength = useSelector((state) => state.clock.breakLength);
  const dispatch = useDispatch();

  return (
    <Card className="text-center">
      <Card.Body>
        <h3 id="break-label">Break Length</h3>
        <ButtonGroup aria-label="Break controls">
          <Button
            id="break-decrement"
            variant="outline-primary"
            onClick={() => dispatch(decrementBreak())}
          >
            -
          </Button>
          <span id="break-length" className="mx-3 h4">
            {breakLength}
          </span>
          <Button
            id="break-increment"
            variant="outline-primary"
            onClick={() => dispatch(incrementBreak())}
          >
            +
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default BreakControl;
