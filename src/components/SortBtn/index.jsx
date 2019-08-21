import React from 'react';
import './style.css';
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SortBtn() {
    return (
        <>
            <div className="sortBtn">
                <FontAwesomeIcon icon={faSort} color="#C8C9C9" />
            </div>
        </>
    );
}

export default SortBtn;
