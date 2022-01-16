import React from 'react';
import PropTypes from 'prop-types';

export const GifItemGrip = ({id, title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    )
}
GifItemGrip.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}