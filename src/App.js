import React from 'react';
import './App.css';
import BookingCard from './components/BookingCard'
import Countdown from './components/Countdown'
import Categories from './components/Categories'
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Categories />
        <Row>
          <Col>
            <BookingCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <Countdown />
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Nav */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
