// seatReducer
import data from '../danhSachGhe.json'
import { SELECT_SEAT, REMOVE_SEAT, RESET_SELECTED_SEATS } from '../Constant/seatActionType'

const initialState = {
    listSeat: data, // Khởi tạo danh sách ghế rỗng
    selectedSeats: [], // Khởi tạo danh sách ghế đã chọn rỗng
};

const seatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_SEAT:
            return {
                ...state,
                selectedSeats: [...state.selectedSeats, action.payload],
            };
        case REMOVE_SEAT:
            return {
                ...state,
                selectedSeats: state.selectedSeats.filter(
                    (seat) => seat.soGhe !== action.payload
                ),
            };
            case RESET_SELECTED_SEATS : return {
                ...state, 
                selectedSeats: []
            }
        default:
            return state;
    }
};

export default seatReducer;