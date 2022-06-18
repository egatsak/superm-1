import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetails from "./components/Product/ProductDetails";
import Cart from "./components/Cart";
import Footer from "./components/Footer/Footer";

import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
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
            </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
