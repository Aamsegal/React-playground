import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
//import App from './App';
import './index.css';
import DemonymApp from './demonymapp/demonymApp';
import App from './paltrows-power-toes/App';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
document.getElementById('root'));