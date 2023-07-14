import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeatItem from './SeatItem';
import SeatColumn from './SeatColumn';
import { selectSeat, removeSeat, resetSelectedSeats } from '../Constant/seatAction';

class Seats extends Component {
    handleSeatChange = (seat, isChecked) => {
        if (isChecked) {
            this.props.selectSeat(seat);
        } else {
            this.props.removeSeat(seat.soGhe);
        }
    };

    calculateTotalPrice = () => {
        const { selectedSeats } = this.props; // Update to use Redux state
        let totalPrice = 0;
        selectedSeats.forEach((seat) => {
            totalPrice += seat.gia;
        });
        return totalPrice;
    };

    renderListSeat = () => {
        const { listSeat } = this.props;
        return listSeat?.map((item, index) => {
            if (item.hang) {
                return (
                    <tr key={index} className="text-center">
                        <td>{item.hang}</td>
                        {item.danhSachGhe.map((seat, index) => {
                            return (
                                <td key={index}>
                                    <SeatItem seat={seat} onChange={this.handleSeatChange} />
                                </td>
                            );
                        })}
                    </tr>
                );
            }
            return null;
        });
    };

    renderSelectedSeats = () => {
        const { selectedSeats } = this.props; // Update to use Redux state
        return selectedSeats.map((seat, index) => (
            <tr key={index}>
                <td>{seat.soGhe}</td>
                <td>{seat.gia}</td>
                <td>
                    <button onClick={() => this.handleRemoveSeat(index)}>Remove</button>
                </td>
            </tr>
        ));
    };

    handleRemoveSeat = (index) => {
        const { selectedSeats } = this.props;
        const seatNumber = selectedSeats[index].soGhe;
        this.props.removeSeat(seatNumber);
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            if (checkbox.value === seatNumber) {
                checkbox.checked = false;
            }
        })
    };

    handlePurchase = () => {
        this.props.resetSelectedSeats();
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    };

    render() {
        const total = this.calculateTotalPrice();
        const { selectedSeats } = this.props;
        const showPurchaseButton = selectedSeats.length > 0;
        return (
            <div className="main__Content">
                <div className="">
                    <p id="notification" />

                    <div className="screen bg-warning text-center">
                        <h2 className="">Screen this way</h2>
                    </div>

                    <div className="text-center row">
                        <table id="seatsBlock" className="w-100 my-3 col-6">
                            <tbody>
                                <SeatColumn />
                                {this.renderListSeat()}
                            </tbody>
                        </table>

                        <div className="col-6">
                            <table className="w-100">
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                    {this.renderSelectedSeats()}
                                    <tr className="bg-warning">
                                        <td>Total</td>
                                        <td></td>
                                        <td>{total}</td>
                                    </tr>
                                    {showPurchaseButton && (
                                        <tr>
                                            <td colSpan="3">
                                                <button
                                                    className="m-3 btn btn-dark w-75"
                                                    onClick={this.handlePurchase}
                                                >
                                                    Purchase
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <ul className="d-flex">
                        <li className="smallBox greenBox">Selected Seat</li>
                        <li className="smallBox redBox">Reserved Seat</li>
                        <li className="smallBox emptyBox">Empty Seat</li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listSeat: state.seatReducer.listSeat,
        selectedSeats: state.seatReducer.selectedSeats,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSeat: (seat) => dispatch(selectSeat(seat)),
        removeSeat: (seatNumber) => dispatch(removeSeat(seatNumber)),
        resetSelectedSeats: () => dispatch(resetSelectedSeats()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Seats);
