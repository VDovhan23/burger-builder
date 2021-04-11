import React, { Component } from 'react';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from "./containers/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";
import  {Switch, Route} from "react-router-dom";

class App extends Component {
  render () {
    return (
      <div>
        <Layout >
            <Switch>
                <Route path="/checkout" component={Checkout} />
                <Route path="/" component={BurgerBuilder}/>
            </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
