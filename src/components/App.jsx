import { Container, Row, Col, Card } from "react-bootstrap";

import "../styles/App.css";
import Timer from "./Timer";
import BreakControl from "./BreakControl";
import TimerControl from "./TimerControl";
import SessionControl from "./SessionControl";

const App = () => {
  return (
    <Container>
      <Card className="text-center p-4 shadow-lg">
        <Card.Body>
          <h1 className="mb-4">25 + 5 Clock</h1>

          {/* Controls for Break and Session */}
          <Row className="justify-content-center mb-4">
            <Col md={6} className="d-flex justify-content-around">
              <BreakControl />
              <SessionControl />
            </Col>
          </Row>

          {/* Timer Display */}
          <Row className="justify-content-center mb-4">
            <Col md={6}>
              <Timer />
            </Col>
          </Row>

          {/* Timer Controls (Start/Stop, Reset) */}
          <Row className="justify-content-center">
            <Col md={6}>
              <TimerControl />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
