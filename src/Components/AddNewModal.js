import React, { Component } from "react";
import Modal from "react-awesome-modal";

class AddNewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rating: 0,
      address: "",
      visible: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
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
      //ANSWER TO WHY PARSEFLOAT https://stackoverflow.com/questions/14059201/why-does-firebug-say-tofixed-is-not-a-function
      rating: parseFloat(this.state.rating),
      vicinity: this.state.address,
      geometry: {
        location: {
          lat: this.props.newPlaceLat,
          lng: this.props.newPlaceLng
        }
      }
    };
    this.closeModal();
    //UNSHIFT VALUES TO RESTAURANTLIST
    return this.props.onAddRestaurant(newRestaurantObj)
    
  }
  render() {
    return (
      <Modal
        visible={this.state.visible}
        width="400"
        height="300"
        effect="fadeInLeft"
        onClickAway={() => this.closeModal()}
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


