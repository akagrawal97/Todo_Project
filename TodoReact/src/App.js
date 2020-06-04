import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from "./component/Login/LoginComponent";
import RegisterComponent from "./component/Register/RegisterComponent";
import ActivityGroupsComponent from "./component/ActivityGroups/ActivityGroupsComponent";
import AddActivityGroupComponent from "./component/ActivityGroups/AddActivityGroupComponent";
import ActivityComponent from "./component/Activity/ActivityComponent";
import AddActivityComponent from "./component/Activity/AddActivityComponent";
import AddMemberComponent from "./component/ActivityGroups/AddMemberComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <Switch>
                      <Route path="/" exact component={LoginComponent} />
                      <Route path="/login" exact component={LoginComponent} />
                      <Route path="/register" component={RegisterComponent} />
                      <Route path="/activitygroups" component={ActivityGroupsComponent} />
                      <Route path="/addActivityGroup" component={AddActivityGroupComponent} />
                      <Route path="/activity" component={ActivityComponent} />
                      <Route path="/addactivity" component={AddActivityComponent} />
                      <Route path="/addnewmember" component={AddMemberComponent} />
                      {/* <Route path="/welcome" component={AddUserComponent} />
                      <Route path="/edit-user" component={EditUserComponent} /> */}
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

export default App;
