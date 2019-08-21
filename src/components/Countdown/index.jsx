import React from 'react';
import './style.css';
import { Row, Col } from 'reactstrap';

function Countdown() {
    return (
        <div className="countdown">
            <Row>
                <Col>
                    <div className="countdown__slots">
                        2 Spots Left!
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="countdown__time">
                        <span className="title">Starts in:</span> 48:52:26
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Countdown;
