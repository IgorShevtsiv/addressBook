import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function InventarOut(props) {
    let {title, category, id, url} = props;
    return (

        <div>
            <p>{title} --- {category}</p>
            <Link to={url + '/' + id}>inventory {id} details</Link>
        </div>
    )
}