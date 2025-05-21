import React from 'react';

class MenuInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            desc: '',
            price: '',
            image: '',
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onDescChangeEventHandler = this.onDescChangeEventHandler.bind(this);
        this.onPriceChangeEventHandler = this.onPriceChangeEventHandler.bind(this);
        this.onImageChangeEventHandler = this.onImageChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeEventHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value,
            }
        });
    }

    onDescChangeEventHandler(event) {
        this.setState(() => {
            return {
                desc: event.target.value,
            }
        });
    }

    onPriceChangeEventHandler(event) {
        this.setState(() => {
            return {
                price: event.target.value,
            }
        });
    }

    onImageChangeEventHandler(event) {
        this.setState(() => {
            return {
                image: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addMenu(this.state);

        this.setState({
            name: '',
            desc: '',
            price: '',
            image: '',
        });
    }

    render() {
        return (
            <form className='menu-input' onSubmit={this.onSubmitEventHandler}>
                <input type="text" className="menu-input-form" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
                <input type="text" className="menu-input-form" placeholder="Deskripsi" value={this.state.desc} onChange={this.onDescChangeEventHandler} />
                <input type="text" className="menu-input-form" placeholder="Price" value={this.state.price} onChange={this.onPriceChangeEventHandler} />
                <input type="text" className="menu-input-form" placeholder="Image Url" value={this.state.image} onChange={this.onImageChangeEventHandler} />
                <button className="menu-submit-btn" type="submit">Tambah</button>
            </form>
        )
    }
}

export default MenuInput;