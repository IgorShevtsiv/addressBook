export default function UsersDetailsComponents({userInfo}) {
    return (
        <div>
            <div>
               <h1>{userInfo.data.name.first}<br/></h1>
                <img src={userInfo.data.images.main} alt=""/>
                <br/>
                {userInfo.data.sayings}

            </div>
        </div>
    )
}