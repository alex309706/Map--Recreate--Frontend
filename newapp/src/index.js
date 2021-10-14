import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';

export {default as signInForm} from './Account/signIn';
export {default as signUpForm} from './Account/signUp';
export {default as Commanders} from './Commanders/Commanders';
export {default as ListOfSubdivisions} from './Subdivisions/ListOfSubdivisions';
export {default as ListOfLocations} from './Location/ListOfLocations';
export {default as RedirectionToComponents} from './StaticElements/RedirectionToComponents';
export {default as ListOfActualData} from './ActualData/ListOfActualData';
export {default as Map} from './Map/MapOfSubdivisions';


ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

