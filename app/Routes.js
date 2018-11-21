import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import LoginPage from './containers/Login';
import NewCall from './components/NewCall/NewCall'
import DashboardLayout from './components/Dashboard/DashboardLayout'
import CaseInfo from "./components/CaseInfo/Caseinfo"

export default () => (
  <App>
    <Switch>
      <Route path={routes.LOGIN} component={LoginPage} />
      <Route path={routes.NEWCALL} component = {NewCall}/>
      <Route path={routes.DASHBOARD} component ={DashboardLayout}/>
      <Route path={routes.CASEINFO} component = {CaseInfo} />
    </Switch>
  </App>
);
