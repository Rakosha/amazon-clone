import React, {useEffect} from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Login/Login';
import {auth} from "./firebase"
import { useStateValue } from './StateProvider/StateProvider';
function App() {

  const[{},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser){
        //user just logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }
      else{
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })

      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
