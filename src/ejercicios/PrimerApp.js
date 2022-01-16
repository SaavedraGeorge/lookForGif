import React from 'react';
import PropTypes from 'prop-types';



const PrimerApp = ({saludo, subtitulo}) => {
    return (
        <>
            <h1>{saludo}</h1>
            <h2>{subtitulo}</h2>
        </>
    );
}
PrimerApp.proType = {
    saludo: PropTypes.string.isRequired
}
PrimerApp.defaultProps = {
    subtitulo: 'subtitulo zi zi'
}


export default PrimerApp;