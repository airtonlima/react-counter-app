import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ 
    saludo, 
    subtitulo, 
    otra
}) => {

    const obj = {
        nombre: 'Airton',
        edad: 26
    };

    return (
        <React.Fragment>

            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
            {/* <p>{ otra }</p> */}

            <pre>{ JSON.stringify(obj, null, 3) }</pre>
            
        </React.Fragment>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string,
    otra: PropTypes.number
};

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
};

export default PrimeraApp;
