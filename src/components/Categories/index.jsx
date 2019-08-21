import React from 'react';
import './style.css';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons'

function Categories() {
    return (
        <div className="categories">
            <Row>
                <Col>
                    <FontAwesomeIcon icon={faMortarPestle} />
                    culinary
                </Col>
                <Col>
                    <FontAwesomeIcon icon={faMortarPestle} />
                    historical
                </Col>
                <Col>
                    <FontAwesomeIcon icon={faMortarPestle} />
                    architectural
                </Col>
                <Col>
                    <FontAwesomeIcon icon={faMortarPestle} />
                    religous
            </Col>
                <Col>
                    <FontAwesomeIcon icon={faMortarPestle} />
                    cultural
                </Col>
            </Row>
        </div>
    );
}

export default Categories;
