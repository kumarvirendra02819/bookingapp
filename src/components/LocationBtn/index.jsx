import React from 'react';
import './style.css';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LocationBtn() {
    return (
        <>
            <div className="locationBtn">
                <FontAwesomeIcon icon={faMapMarkerAlt} color="#FC684B" />
            </div>
        </>
    );
}

export default LocationBtn;
