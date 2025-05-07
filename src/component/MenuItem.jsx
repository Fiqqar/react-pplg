import ItemImage from "./ItemImage";
import ItemBody from "./ItemBody";
import React from "react";
function MenuItem({name, desc, price, image}) {
    return (
        <div className="menu-item">
        <ItemImage image={image}/>
        <ItemBody 
            name = {name}
            desc = {desc}
            price = {price}
        />
        </div>
    );
}
export default MenuItem;