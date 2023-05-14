import React, { useState } from "react";
import {  Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";
import CalculateDirection from "./customFunctions";
function App() {
  // define x-axis, y-axis, direction by use state hook 
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState(0);
  // define value to get value of input text
  const [value, setValue] = useState('');
  // define handleCalculateDirection function to get x-axis, y-axis, direction  
  const handleCalculateDirection = (e) => {
    // prevent page from refreshing
    e.preventDefault();
    // destructuring x,y,direction values
    var { x, y, direction } = CalculateDirection(value);
    // set x,y,direction values to use it directly 
    setX(x);
    setY(y);
    setDirection(direction);
  };
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center">
          <Col sm="10" className="d-flex justify-content-between ">
            <Form onSubmit={handleCalculateDirection}>
              <input className="custom-input" type="text" value={value} onChange={(e)=>setValue(e.target.value.toUpperCase())}/>
              <input
                type="submit"
                className="custom-btn"
                value="Get Information"
              />
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="10" className="d-flex justify-content-between ">
            <p>
              <span>x is {x}</span>
              {"  "} - {"  "}
              <span>y is {y}</span>
              {"  "} - {"  "}
              <span>direction is {direction}</span>
            </p>
            <p>{`(${x} , ${y}) ${direction}`}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
