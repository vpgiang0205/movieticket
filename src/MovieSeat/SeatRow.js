import React, { Component } from 'react'

export default class SeatRow extends Component {
    render() {
        const { seat } = this.props
        return (
            <div style={{ background: 'red' }}>
                {seat.hang}
            </div>
        )
    }
}
