import {useEffect, useState} from 'react'
import User from "../user/User";
import './User.style.css'

export default function Users() {
    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            })
    }, [])

    const search = (id) => {
        let findUser = users.find(value => value.id === id);
        console.log(findUser)
        setSingleUser(findUser);
    }
    return (
        <div className={'wrapper'}>
            <div className={'users-info'}>
                {
                    users.map((value) => <User
                        key={value.id}
                        item={value}
                        search={search}
                    />)
                }
            </div>
            <div className={'single-user-info'}>
                {
                    // JSON.stringify(singleUser)
                    singleUser ? <h4>
                        id : {singleUser.id} <br/>
                        name : {singleUser.name}<br/>
                        email : {singleUser.email}<br/>
                        company : {singleUser.company.name}
                    </h4> : <h5>User is not defined</h5>
                }
            </div>


        </div>
    )
}

