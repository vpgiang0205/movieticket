import React, { Component } from 'react';

export default class SeatItem extends Component {
  render() {
    const { seat } = this.props;
    return (
        <td>
          <input type="checkbox" name="" id="" value={seat.soGhe} />
        </td>
    );
  }
}
