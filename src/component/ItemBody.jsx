import React from "react";

function ItemBody({name = "Error", desc = "No description available", price = 0}) {
    return (
        <div className="item-body">
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>Rp. {price.toLocaleString()}</p>
        </div>
    );
}
export default ItemBody;