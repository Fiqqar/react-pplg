import ItemImage from "./ItemImage";
import ItemBody from "./ItemBody";
import DeleteButton from "./DeleteButton"
import React from "react";
function MenuItem({name, desc, price, image, id, onDelete}) {
    return (
        <div className="menu-item">
        <ItemImage image={image}/>
        <ItemBody 
            name = {name}
            desc = {desc}
            price = {price}
        />
        <DeleteButton 
        id = {id} 
        onDelete = {onDelete}
        />
        </div>
    );
}
export default MenuItem;