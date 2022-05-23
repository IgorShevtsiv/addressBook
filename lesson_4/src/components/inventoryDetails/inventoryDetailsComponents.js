export default function InventoryDetailsComponents({invet}) {
    return (
        <div>
            <div>
                <h1>{invet.data.title}</h1>
                <br/>
                {invet.data.description}
            </div>
        </div>
    )
}
<h2></h2>
