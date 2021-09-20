import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loader from '../components/loader';
import Header from '../components/header';
import SidebarMenu from '../components/menu';
import { PopupController } from '../components/popups/popup.controller';

const Dishes = lazy(() => import('../pages/dishes'));
const Restaurants = lazy(() => import('../pages/restaurants'));
const Checkins = lazy(() => import('../pages/checkins'));

const Panel = () => {

  return (

    <React.Fragment>
      
      <PopupController />

      <Header />

      <section className = "content">

        <SidebarMenu />

        <section className = "workflow">
        
          <Suspense fallback={ <Loader /> }>

            <Switch>

              <Route exact path='/dishes' component = { Dishes } />
              <Route exact path='/restaurants' component = { Restaurants } />                
              <Route exact path='/checkins' component = { Checkins } />                

            </Switch>

          </Suspense>

        </section>

      </section>

    </React.Fragment>

  );

}

export default Panel;