import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col
} from 'reactstrap';
import './style.css';
import LocationBtn from './../LocationBtn';
import SortBtn from './../SortBtn';
import { faTree, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BookingCard() {
    return (
        <Card>
            <CardImg top width="100%" src="https://picsum.photos/300/300" alt="Card image cap" />
            <CardBody>
                <CardTitle>Historical Tour Of The Rocks</CardTitle>
                <Row className="card-categories">
                    <Col>
                        <div className="card-categories-icon">9</div>
                        <p className="card-categories-text">Overall</p>
                    </Col>
                    <Col>
                        <div className="card-categories-icon">
                            <FontAwesomeIcon icon={faTree} />
                        </div>
                        <p className="card-categories-text">Nature</p>
                    </Col>
                    <Col>
                        <div className="card-categories-icon">3</div>
                        <p className="card-categories-text">Hours</p>
                    </Col>
                </Row>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nisl ac condimentum sodales, turpis est.</CardText>
            </CardBody>
            <SortBtn />
            <LocationBtn />
            <FontAwesomeIcon icon={faChevronDown} color="#118EFF" />
        </Card>
    );
}

export default BookingCard;
