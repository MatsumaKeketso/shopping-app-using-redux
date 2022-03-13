import React, { useEffect, } from 'react';
import './App.css';
import {
  Route,
  Switch
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar/NavBar';
import Login from './pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './pages/Cart';
import Notification from './components/Notification';
import { fetchData, sendCartData } from './store/cart-actions';
function App() {
  let firstRender = true;
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const notification = useSelector(state => state.ui.notification)
  useEffect(() => {
    dispatch(fetchData())
  },[dispatch])
  useEffect(() => {
    if (firstRender) {
      firstRender = false
      // return;
    }
    dispatch(sendCartData(cart))
  }, [cart, dispatch])
  switch (isLoggedIn) {
    case true:
      return (
        <div>
          <Notification type={notification.type} message={notification.message} />
          <NavBar />
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>

      );

    case false:
      return (
        <Login></Login>
      );
  }

}

export default App;
