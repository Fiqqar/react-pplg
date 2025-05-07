import React from "react";

function ItemImage({image}) {
    return (
        <div className="item-image">
            <img src={image} alt="Item" className="sate" />
        </div>
    );
}

export default ItemImage;