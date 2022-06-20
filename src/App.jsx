import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetails from "./components/Product/ProductDetails";
import Cart from "./components/Cart";
import Footer from "./components/Footer/Footer";
import Loader from './components/Generic/Loader'

import { persistor, store } from "./redux/store";
import PaymentSuccessful from "./components/PaymentSuccessful";

function App() {
  return (
    <>
      <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
      <div className="app-wrapper">
        <BrowserRouter>
         <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route path="/products/:id">
                <ProductDetails />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path='/paymentsuccessful'>
                <PaymentSuccessful />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
        <Footer />
        </div>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
