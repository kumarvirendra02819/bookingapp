import React from 'react';
import './style.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BookBtn() {
    return (
        <>
            <div className="bookBtn">
                Book <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </>
    );
}

export default BookBtn;
