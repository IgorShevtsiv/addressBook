import {Link} from "react-router-dom";

export default function User(props) {
    let {name: {last, first}, images: {main}, url, id} = props
    return (
        <div>
            <p>{first} - {last}</p>
            <img src={main} alt="2"/>
            <Link to={url + '/' + id}> user {id} details</Link>
        </div>
    )
}