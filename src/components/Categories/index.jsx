import React from 'react';
import './style.css';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faMonument, faWarehouse, faPrayingHands, faTheaterMasks } from '@fortawesome/free-solid-svg-icons'

function Categories() {
    return (
        <div className="categories">
            <Row>
                <Col>
                    <FontAwesomeIcon icon={faHamburger} size="2x" />
                </Col>
                <Col>
                    <div>
                        <FontAwesomeIcon icon={faMonument} size="2x" />
                    </div>
                </Col>
                <Col>
                    <div>
                        <FontAwesomeIcon icon={faWarehouse} size="2x" />
                    </div>
                </Col>
                <Col>
                    <div>
                        <FontAwesomeIcon icon={faPrayingHands} size="2x" />
                    </div>
                </Col>
                <Col>
                    <div>
                        <FontAwesomeIcon icon={faTheaterMasks} size="2x" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    culinary
                </Col>
                <Col>
                    historical
                </Col>
                <Col>
                    architectural
                </Col>
                <Col>
                    religous
                </Col>
                <Col>
                    cultural
                </Col>
            </Row>
        </div>
    );
}

export default Categories;
