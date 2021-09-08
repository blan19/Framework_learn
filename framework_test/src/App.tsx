import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="login" />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/main" component={Main} />
    </Switch>
  );
};

export default App;
