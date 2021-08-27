import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Register from "./Pages/Register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  const user = "";
  return (
    <Router>
      <Topbar user={user}/>

      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path ="/login">
        {user ? <Home /> :<Login />}
      </Route>
      <Route path="/register">
        {user ? <Home /> : <Register />}
      </Route>
      <Route path="/write">
        {user ? <Write /> : <Register / >}
      </Route>
      <Route path="/settings">
        {user ? <Settings /> : <Register />}
      </Route>
      <Route path="/post/:postId">
        <Single />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
