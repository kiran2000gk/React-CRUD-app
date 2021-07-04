import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Navbar from "./components/nav/Navbar";
import Error from "./components/pages/Error";
import AddUser from "./components/users/AddUser";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import EditUser from "./components/users/EditUser";
import DeleteUsers from "./components/users/DeleteUsers";
import User from "./components/users/User";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/delete" component={DeleteUsers} />
          <Route exact path="/users/user/:id" component={User} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
