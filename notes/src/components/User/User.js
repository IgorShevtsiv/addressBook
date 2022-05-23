import './user.style.css'
export default function User(props) {
    let {name, id, phone, details,delItem} = props
    return (
        <div className={'infoContainer'}>
            <h2>{name}</h2>
            <p>{phone}</p>
            <button className={'detailsItem'} onClick={() => details(id)}>details</button>
            <button>Edit</button>
            <button className={'deleteItem'} onClick={()=>{delItem(id)}}>Delete</button>
        </div>
    )

}