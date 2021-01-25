import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp value={ 10 } />, divRoot);

// import PrimeraApp from './PrimeraApp';
// const cmp = (
//     <PrimeraApp 
//     saludo='Olá, soy Goku' 
//     otra={ 123 }
//     />
//     );