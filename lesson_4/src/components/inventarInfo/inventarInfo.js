import {useState, useEffect} from 'react'
import InventarOut from "../inventarOut/inventarOut";
import {getInventar} from "../../services/services";

export default function InventarInfo({url}) {
    let [inventar, setInventar] = useState([]);
    useEffect(() => {
        getInventar().then(value => setInventar([...value.data]))
    }, [])
    let inventarInfo = inventar.filter(value => value.id < 11)
    return (
        <div>
            {
                inventarInfo.map(value => <InventarOut
                        key={value.id}
                        {...value}
                        url={url}
                    />
                )
            }
        </div>
    )
}