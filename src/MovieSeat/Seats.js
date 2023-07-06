import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeatItem from './SeatItem';
import SeatRow from './SeatRow';

class Seats extends Component {
    renderListSeatRow = () => {
        const { listSeat } = this.props;
        return listSeat?.map((row) => {
            if (row.hang) {
                return (
                    <SeatRow key={row.hang} row={row.hang}>
                    </SeatRow>
                );
            }
            return null;
        });
    };

    render() {
        return <>{this.renderListSeatRow()}</>;
    }
}

const mapStateToProps = (state) => {
    return {
        listSeat: state.seatReducer.listSeat,
    };
};

export default connect(mapStateToProps)(Seats);
