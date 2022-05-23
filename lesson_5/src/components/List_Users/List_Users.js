import React, {useEffect, useState} from "react";
import ListUser from "../ListUser/ListUser";
import {getUsers} from "../../services/Api";
import {Link} from "react-router-dom";

export default function ListUsers() {
    let [users, setUsers] = useState([]);
    let [nextPage, setNextPage] = useState(1)
    const next = () => {
        setNextPage(nextPage + 1)
    }
    const previous = () => {
        nextPage > 1 ? setNextPage(nextPage - 1) : setNextPage(1)
    }
    useEffect(() => {
        getUsers(nextPage).then(value => setUsers([...value.data.data]))
    }, [nextPage])
    console.log(users)
    return (
        <div>
            {
                users.map(value => <ListUser
                    key={value.id}
                    item={value}
                />)
            }
            <Link to={{pathname: "/users", search: "?page=" + nextPage}}>
                <button onClick={previous}>Previous</button>
            </Link>

            <Link to={{pathname: "/users", search: "?page=" + nextPage}}>
                <button onClick={next}>Next</button>
            </Link>
        </div>
    )
}