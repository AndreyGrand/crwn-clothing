import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = props => {
  console.log(props);
  return(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
};
const TimePage = props => {
  console.log(props);
  return(
  <div>
    <h1>Time PAGE {props.match.params.hatId}</h1>
  </div>
);
};
function App() {
  return (
    <div>
    <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatsPage}/>
        <Route path='/hats/:hatId' component={TimePage}/>
    </Switch>
    </div>
  );
}

export default App;
