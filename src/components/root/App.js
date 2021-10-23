import React, { Component } from 'react';
import Dashboard from "./Dashboard";
import Navi from '../navi/Navi';
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import Categories from '../navi/Categories';
import "./app.css"
import ProductList from '../products/ProductList';
import CartList from '../cart/CartList';
class App extends Component {
  render() {
    return (
      <div>
       
        <Navi/>
        <Categories/>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/product" exact component={ProductList} />
          <Route path="/cart" exact component={CartList} />
        </Switch>
      
      </div>
      
    );
  }
}

export default App;





