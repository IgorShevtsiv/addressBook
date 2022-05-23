import './tesla.style.css';
function Tesla(props) {
    return (
        <div>
            <p>  {props.description} </p>
            <img src= {props.image} alt=""/>
        </div>
    );
}
export default Tesla;