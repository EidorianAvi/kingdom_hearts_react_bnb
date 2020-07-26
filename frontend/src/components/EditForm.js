import React, { Component } from "react";

const initialState = {
    name: "",
    image: "",
    first_appearance: "",
    alignment: "",
    id: 0,
};

class EditForm extends Component {
    state = initialState;

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.editCharacter(this.state);
        this.setState(initialState);
    };

    handleChange = (event) => {
        let { name, value } = event.target
        this.setState({
            [name]: value,
        });
    };
    

    render() {
        const { name, image, first_appearance, alignment } = this.state;

        return (
            <div className="character-form">
                <h2>Edit Character</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="image"
                        value={image}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="first_appearance"
                        placeholder="first appearance"
                        value={first_appearance}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="alignment"
                        placeholder="alignment"
                        value={alignment}
                        onChange={this.handleChange}
                    /><br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default EditForm;
