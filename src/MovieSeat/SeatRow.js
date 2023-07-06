import React, { Component } from 'react'

export default class SeatRow extends Component {
    render() {
        const { row } = this.props
        return (
            <tr>
                {row}
            </tr>
        )
    }
}
