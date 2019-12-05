import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'
import DelayPage from '../component/DelayPage';
import App from '../component/App';

const AppRouter = () => {
  
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/DelayPage" component={DelayPage} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRouter;

