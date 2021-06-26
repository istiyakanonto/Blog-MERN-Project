
import Topbar from "./components/Topbar/Topbar.jsx"
import Home from "./components/Pages/Home/Home.jsx"
import Single from "./components/Pages/Single/Single.jsx"
import Write from "./components/Pages/Write/Write.jsx"
import Settings from "./components/Pages/Settings/Settings.jsx"
import Login from "./components/Pages/Login/Login.jsx"
import Register from "./components/Pages/Register/Register.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const currentUser = true;
  return (
    <Router>
    <Topbar />
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/posts">
        <Home />
      </Route>
      <Route path="/register">
        {currentUser ? <Home /> : <Register />}
      </Route>
      <Route path="/login">{currentUser ? <Home/> : <Login />}</Route>
      <Route path="/post/:id">
        <Single />
      </Route>
      <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
      <Route path="/settings">
        {currentUser ? <Settings /> : <Login />}
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
