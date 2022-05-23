import React, {useState, useEffect} from 'react'
import User from "../User/User";
export default function Users() {
    let [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            });
    }, [])
    return (
        <div>
            {
                users.map(value => <User
                    key={value.id}
                    item={value}
                />)
            }
        </div>
    )
}