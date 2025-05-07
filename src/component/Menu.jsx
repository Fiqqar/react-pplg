import React from "react";
import arr from '../utils/data.js';
import MenuList from "./MenuList.jsx";

function Menu() {
    const food = arr();

    return (
        <div className="menu">
            <h1>List Menu</h1>
            <MenuList food={food} />
        </div>
    );
}

export default Menu;