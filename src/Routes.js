import React from 'react';
import { Switch, Route } from 'react-router-dom'
import PromotionSearchScreen from './screens/Promotion/Search'
import PromotionFormScreen from './screens/Promotion/Form'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ PromotionSearchScreen } />
    <Route path="/create" component={ PromotionFormScreen } />
    <Route path="/:id/edit" component={ PromotionFormScreen } />
  </Switch>
);

export default Routes;