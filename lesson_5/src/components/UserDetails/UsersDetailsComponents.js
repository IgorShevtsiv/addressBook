export default function UsersDetailsComponents({userInfo}) {
    return (
        <div>
            <hr/>
            {userInfo.first_name} <br/>
            {userInfo.last_name} <br/>
            {userInfo.email} <br/>
            <img src={userInfo.avatar} alt="avatar"/>
            <hr/>
        </div>
    )
}