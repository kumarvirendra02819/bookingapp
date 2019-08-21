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
                    culinary
                </Col>
                <Col>
                    <FontAwesomeIcon icon={faMonument} size="2x" />
                    historical
                </Col>
                <Col>
                    <FontAwesomeIcon icon={faWarehouse} size="2x" />
                    architectural
                </Col>
                <Col>
                    <FontAwesomeIcon icon={faPrayingHands} size="2x" />
                    religous
                </Col>
                <Col>
                    <FontAwesomeIcon icon={faTheaterMasks} size="2x" />
                    cultural
                </Col>
            </Row>
        </div>
    );
}

export default Categories;
