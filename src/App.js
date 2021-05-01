import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Homescreen from "./screens/Home/Homescreen"
import Loginscreen from "./screens/LoginScreen/Loginscreen"
import Registerscreen from "./screens/Register/Registerscreen";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Loginscreen />
        </Route>
        <Route exact path="/registerme">
          <Registerscreen />
        </Route>
        <Route exact path="/home">
        <Homescreen />
        </Route>
        <Route  path="/*">
        <Loginscreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
