import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Results from './components/results';
import Details from './components/details';

import mainStore from './redux/mainStore';

const _APP_ROOT = (
  
  <Provider store={mainStore}>

    <BrowserRouter>
    
      <Switch>
    
        <Route path="/results" component={Results} />
        <Route path="/details/:itemId" component={Details} />
        <Redirect from="/" to="/results" />
    
      </Switch>
    
    </BrowserRouter>

  </Provider>  

);

function App() {

  return _APP_ROOT;

}

export default App;
