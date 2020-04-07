import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
//import App from './App';
import './index.css';
import DemonymApp from './demonymapp/demonymApp';
import App from './paltrows-power-toes/App';
import AppLang from "./lang-context/AppLang";
import RegistrationForm from "./registrationForm/registrationForm"
import PlayingWithDangerApp from './playingwithdanger/playingwithdangerApp';

ReactDOM.render(
    /*<BrowserRouter>
        <App />
    </BrowserRouter>*/
    //<AppLang /> 
    //<RegistrationForm />,
    <PlayingWithDangerApp />,
document.getElementById('root'));