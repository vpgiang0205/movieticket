import React, { Component } from 'react';
import './seatItem.css'
export default class SeatItem extends Component {
  handleCheckboxChange = (event) => {
    const { seat, onChange } = this.props;
    const isChecked = event.target.checked;
    onChange(seat, isChecked);
  };
  render() {
    const { seat, index } = this.props;
    return (
      <input
        key={index}
        type="checkbox"
        name=""
        id=""
        value={seat.soGhe}
        className="custom-checkbox"
        onChange={this.handleCheckboxChange}
      />

    );
  }
}
