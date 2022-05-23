import './App.css';
import Users from "./components/users/Users";
import InventarInfo from "./components/inventarInfo/inventarInfo";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import InventoryDetails from "./components/inventoryDetails/InventoryDetails";
import UsersDetails from "./components/UsersDetails/UsersDetails";

function App() {
    return (
        <Router>
            <div className="App">
                <div><Link to={'/characters'}>Character</Link></div>
                <div><Link to={'/inventory'}>Inventory</Link></div>
                <Switch>
                    <Route path={'/characters'} exact={true} render={({match: {url}}) => <Users url={url}/>}/>
                    <Route path={'/characters/:id'} render={(props) => <UsersDetails item={props}/>}/>
                    <Route path={'/inventory'} exact={true} render={({match: {url}}) => <InventarInfo url={url}/>}/>
                    <Route path={'/inventory/:id'} render={(props) => <InventoryDetails item={props}/>}/>
                </Switch>
            </div>
        </Router>
    );
}


export default App;
