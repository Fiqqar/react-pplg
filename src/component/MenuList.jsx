import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ food }) {
    return (
        (
            food.map((item) => (
                <div className="menu-list" >
                    <MenuItem 
                        key={item.id} 
                        {...item} 
                    />
                </div>
            ))
        )
    )

}
export default MenuList;