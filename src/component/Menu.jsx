import React from "react";
import arr from '../utils/data.js';
import MenuList from "./MenuList.jsx";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            food: arr()
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        const food = this.state.food.filter(item => item.id !== id);
        this.setState({ food });
    }

    render() {
        return (
            <div className="menu">
                <h1>List Menu</h1>
                <MenuList 
                food = {this.state.food}
                onDelete = {this.handleDelete} />
            </div>
        );
    }
}

export default Menu;