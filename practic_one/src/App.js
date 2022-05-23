import Users from "./components/Users/Users";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Posts from "./components/Posts/Posts";

function App() {
    return (
        <div>
            <Router>
                <Link to={'/users'}>
                    <button>Info user</button>
                </Link>
                <br/>
                <Link to={'/posts'}>
                    <button>Info post</button>
                </Link>
                <Switch>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

