import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loader from '../components/loader';
import Header from '../components/header';
import SidebarMenu from '../components/menu';
import { PopupController } from '../components/popups/popup.controller';

const Restaurants = lazy(() => import('./restaurants'));
const EditorFeed = lazy(() => import('./editor.feed'));
const Checkins = lazy(() => import('./checkins'));
const Dishes = lazy(() => import('./dishes'));
const Users = lazy(() => import('./users'));

const Panel = () => {

  return (

    <React.Fragment>
      
      <PopupController />

      <Header />

      <section className = "content">

      <SidebarMenu />
      
        <Suspense fallback={ <Loader /> }>

          <Switch>

            <Route exact path='/dishes' component = { Dishes } />
            <Route exact path='/restaurants' component = { Restaurants } />                
            <Route exact path='/checkins' component = { Checkins } />                
            <Route exact path='/users' component = { Users } />                
            <Route exact path='/feed' component = { EditorFeed } />                

          </Switch>

        </Suspense>

      </section>

    </React.Fragment>

  );

}

export default Panel;