import React from 'react';
import { Switch, Route } from 'react-router-dom'
import PromotionSearchScreen from './screens/Promotion/Search'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ PromotionSearchScreen } />
  </Switch>
);

export default Routes;