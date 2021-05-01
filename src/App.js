import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Homescreen from "./screens/Home/Homescreen"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homescreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
