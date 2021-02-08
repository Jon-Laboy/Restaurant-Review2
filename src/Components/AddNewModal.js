import React, { Component } from "react";
import Modal from "react-awesome-modal";

class AddNewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rating: 0,
      address: "",
      visible: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();

    let newRestaurantObj = {
      name: this.state.name,
      rating: parseFloat(this.state.rating),
      vicinity: this.state.address,
      geometry: {
        location: {
          lat: this.props.newPlaceLat,
          lng: this.props.newPlaceLng
        }
      }
    };
    return this.props.onAddRestaurant(newRestaurantObj)
  }
  render() {
    return (
      <Modal
        visible={this.props.visible}
        width="400"
        height="300"
        effect="fadeInLeft"
        onClickAway={() => this.props.closeModal()}
      >
        <div>
          <h3>Add/Edit Restaurant</h3>
          <form onSubmit={this.submitForm}>
            <div>
              <input
                type="text"
                placeholder="Name..."
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Rating:</label>
              <select
                name="rating"
                value={this.state.rating}
                onChange={this.handleChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Address..."
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="submit-button">
              submit
            </button>
          </form>
        </div>
      </Modal>
    );
  }
}
export default AddNewModal;


