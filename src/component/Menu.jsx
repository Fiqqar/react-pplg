import React from "react";
import arr from '../utils/data.js';
import MenuList from "./MenuList.jsx";
import MenuInput from "./MenuInput.jsx";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            food: arr()
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.onAddMenuHandler = this.onAddMenuHandler.bind(this);
    }

    handleDelete(id) {
        const food = this.state.food.filter(item => item.id !== id);
        this.setState({ food });
    }

    onAddMenuHandler({ name, desc, price, image }) {
        this.setState((prevState) => {
            return {
                food: [
                    ...prevState.food,
                    {
                        id: +new Date(),
                        name,
                        desc,
                        price,
                        image,
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="menu">
                <h1>Warung Jaya Wijaya</h1>
                <h2>Tambah Menu</h2>
                <MenuInput
                    addMenu={this.onAddMenuHandler}
                />

                <h1>List Menu</h1>
                <MenuList
                    food={this.state.food}
                    onDelete={this.handleDelete} />
            </div>
        );
    }
}

export default Menu;