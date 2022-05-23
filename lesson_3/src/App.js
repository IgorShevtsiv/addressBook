import './App.css';
import Users from "./components/users/users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Posts from "./components/posts/Posts";

function App() {
    return (
        <div>
            <Router>
                <div className={'linkContainer'}>
                    <div className={'linkInfo'}>
                        <Link to={'/users'}>Info about Users</Link>
                        <img width={'100%'} src="https://ps.w.org/cbxuseronline/assets/icon-256x256.png?rev=2284897"

                             alt=""/></div>
                    <div className={'linkInfo'}>
                        <Link to={'/posts'}>Info about Post</Link>
                        <img width={'100%'} src="https://itxdesign.com/wp-content/uploads/2014/01/wordpress-post.jpg"
                             alt=""/>
                    </div>
                </div>
                <Switch>
                    <Route path={'/users'} render={() => (<Users/>)}/>
                    <Route path={'/posts'} render={() => (<Posts/>)}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
