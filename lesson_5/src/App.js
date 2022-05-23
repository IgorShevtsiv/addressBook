import './App.css';
import ListUsers from "./components/List_Users/List_Users";
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
    let link = '/users';
    return (
        <div className="App">
            <Router>
                <Link to={link}>Users</Link>
                <Switch>
                    <Route exact path={link} render={(props) => <ListUsers {...props} />}/>
                    <Route path={'/users/:id'} render={(props) => <UserDetails item={props}/>}/>
                </Switch>
                <br/>
            </Router>
        </div>
    );

}

export default App;
