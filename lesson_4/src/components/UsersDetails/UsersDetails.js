import React, {useEffect, useState} from 'react'
import {getUsersID} from '../../services/services'
import UsersDetailsComponents from "./UsersDetailsComponents";

export default function UsersDetails({item}) {
    let {match: {params: {id}}} = item
    let [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        getUsersID(id).then(value => setUserInfo({...value}))
    }, [])
    console.log(userInfo);
    return (
        <div>
            {
                userInfo && <div>
                    <UsersDetailsComponents
                        userInfo={userInfo}
                    />
                </div>
            }
        </div>
    )
}