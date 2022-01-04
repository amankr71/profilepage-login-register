
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(localStorage.getItem("user"))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage updateUser={updateUser} /> : <Login updateUser={updateUser}/>
            }
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;