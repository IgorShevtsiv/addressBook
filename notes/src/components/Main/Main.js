import '../Main/main.style.css'
import {useEffect, useState} from 'react'
import User from "../User/User";

export default function Main() {
    let [name, setName] = useState('');
    let [surname, setSurname] = useState('');
    let [age, setAge] = useState('');
    let [city, setCity] = useState('');
    let [phone, setPhone] = useState('');
    let [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('item')) || []);
    let [userDetail, setUserDetail] = useState(null);

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(userInfo))
    })
    const addInfo = (ev) => {
        ev.preventDefault();
        if (name !== '' && phone !== '') {
            setUserInfo([...userInfo, {name, id: Date.now(), surname, age, city, phone}])
        } else {
            alert('Enter a name and phone')
        }
    }
    const nameAdd = (ev) => {
        setName(name = ev.target.value)
    }
    const surnameAdd = (ev) => {
        setSurname(surname = ev.target.value)
    }
    const ageAdd = (ev) => {
        setAge(age = ev.target.value)
    }
    const cityAdd = (ev) => {
        setCity(city = ev.target.value)
    }
    const phoneAdd = (ev) => {
        setPhone(phone = ev.target.value)
    }
    const delItem = (id) => {
        setUserInfo(userInfo.filter(value => value.id !== id))
    }
    const details = (id) => {
        let findUser = userInfo.find(value => value.id === id);
        console.log(findUser);
        setUserDetail(findUser);
    }
    const closeInfo = () => {
        setUserDetail('')
    }
    return (
        <div className={'mainContainer'}>
            <div className={'formForm'}>
                <form className={'formContainer'}>
                    <input onChange={nameAdd} className={'inputContainer'} type="text"
                           placeholder={'Name'}
                    />
                    <input onChange={surnameAdd} className={'inputContainer'} type="text"
                           placeholder={'Surname'}
                    />
                    <input onChange={ageAdd} className={'inputContainer'} type="text"
                           placeholder={'Age'}
                    />
                    <input onChange={cityAdd} className={'inputContainer'} type="text"
                           placeholder={'City'}
                    />
                    <input defaultValue={'+380'} onChange={phoneAdd} className={'inputContainer'} type="text"
                           placeholder={'Phone (+380)'}
                    />
                    <button onClick={addInfo} className={'addInput'}>Add</button>
                </form>
            </div>
            <div className={'infoForm'}>
                {
                    userDetail ? (
                        <div>
                            <h4>name : {userDetail.name} <br/>
                                surname : {userDetail.surname}<br/>
                                age : {userDetail.age}<br/>
                                city : {userDetail.city}<br/>
                                phone: {userDetail.phone}</h4>
                            <button onClick={closeInfo}>Close Information</button>
                        </div>
                    ) : (<span>User is not defined</span>)
                }
            </div>
            <div className={'infoUser'}>

                {/*<input type="text"*/}
                {/*       placeholder={'Search'}*/}
                {/*/>*/}
                {/*<button>Search</button>*/}
                {
                    userInfo.map((value, index) =>
                        <User
                            key={index}
                            details={details}
                            delItem={delItem}
                            {...value}
                        />
                    )
                }
            </div>
        </div>

    );
}