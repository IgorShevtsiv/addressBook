import React, {useEffect, useState} from 'react'
import {getInventarID} from '../../services/services'
import InventoryDetailsComponents from "./inventoryDetailsComponents";

export default function InventoryDetails({item}) {
    let {match: {params: {id}}} = item
    let [invet, setInvent] = useState(null)
    useEffect(() => {
        getInventarID(id).then(value => setInvent({...value}))
    }, [])
    return (
        <div>
            {
                invet && <div>
                    <InventoryDetailsComponents
                        invet={invet}/>
                </div>
            }
        </div>
    )
}
