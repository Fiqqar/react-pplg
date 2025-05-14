import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ food, onDelete }) {
    return (
        (
            food.map((item) => (
                <div className="menu-list" >
                    <MenuItem 
                        key={item.id} 
                        id = {item.id}
                        onDelete={onDelete}
                        {...item} 
                    />
                </div>
            ))
        )
    )

}
export default MenuList;