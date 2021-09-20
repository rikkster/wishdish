import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Panel from './react/pages/panel'

const App = () => (

  <BrowserRouter>

    <Switch>

      <Route path='/' component = { Panel } />
      <Route path='/dishes' component = { Panel } />
      <Route path='/restaurants' component = { Panel } />
      {/* TODO: auth */}
      

    </Switch>

  </BrowserRouter>

    
);

export default App;