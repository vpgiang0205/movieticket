import React, { Component } from 'react';

export default class SeatItem extends Component {
  render() {
    const { seat } = this.props;
    return (
        <td>
          <input type="text" className='w-75' name="" id="" value={seat.soGhe} />
        </td>
      
    );
  }
}
