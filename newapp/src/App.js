import React from 'react';
import './App.css';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import {signInForm,  signUpForm,  Commanders,  ListOfSubdivisions as Subdivisions,  ListOfLocations as Locations,  RedirectionToComponents,  ListOfActualData as ActualData, Map} from './index';

function App() {
  return (
    <Router>
       <Switch>
          <Route  path ='/signUp' component={signUpForm}/>
          <Route  path ='/signIn' component={signInForm}/>
          <Route path='/Commanders' component={Commanders}/>
          <Route path='/Subdivisions' component={Subdivisions}/>
          <Route path='/Locations' component={Locations}/>
          <Route path='/ActualData' component={ActualData}/>
          <Route path='/' component = {Map}/>
      </Switch>
      <RedirectionToComponents/>
    </Router>
 
  );
}
export default App;
