import React, { Component } from 'react'
import { connect } from 'react-redux';

class SeatColumn extends Component {
    renderColumn = () => {
        const { listSeat } = this.props;
        // eslint-disable-next-line array-callback-return
        return listSeat?.map((item) => {
            if (item.hang === "") {

                return (
                    <tr key={item.hang} className="text-center">
                        <td />
                        <>{item.danhSachGhe.map((col) => {
                            return (
                                
                                <td key={col.soGhe}> {col.soGhe}</td>
                            )
                        })}</>
                    </tr>
                )
            }
        })
    };
    render() {
        return (
            <>
                {this.renderColumn()}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listSeat: state.seatReducer.listSeat,
    };
};

export default connect(mapStateToProps)(SeatColumn);
