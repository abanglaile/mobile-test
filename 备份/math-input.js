import React from 'react';
import ReactDOM from 'react-dom';
//const React = require('react');
//const ReactDOM = require('react-dom');
//const MathInput = require('./math-input/build/app');
import MathInput from './math-input/src/components/app.js';
console.log(MathInput);
ReactDOM.render(<MathInput />, document.getElementById('root'));