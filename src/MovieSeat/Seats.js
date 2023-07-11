import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeatItem from './SeatItem';
import SeatRow from './SeatRow';
class Seats extends Component {
    renderListSeat = () => {
        const { listSeat } = this.props;
        return listSeat?.map((item, index) => {
            if (item.hang) {
                return (
                    <>
                        <tr key={item.hang}>
                            {item.hang}

                            {item.danhSachGhe.map((seat) => {
                                return (
                                    <>
                                        <SeatItem key={index} seat={seat} />
                                    </>
                                )
                            })}
                        </tr>
                    </>

                )
            }
            return null;
        });
    };

    render() {
        return <>
            {this.renderRow}
            {this.renderListSeat()}</>;
    }
}

const mapStateToProps = (state) => {
    return {
        listSeat: state.seatReducer.listSeat,
    };
};

export default connect(mapStateToProps)(Seats);
