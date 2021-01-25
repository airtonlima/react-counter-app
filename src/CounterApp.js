import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = _ => setCounter(counter + 1);

    const handleSubtract = _ => setCounter(counter -1);

    const handleReset = _ => setCounter(value);
    
    return (
        <React.Fragment>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }> Reset</button>
            <button onClick={ handleSubtract }> -1</button>
        </React.Fragment>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
};

export default CounterApp;