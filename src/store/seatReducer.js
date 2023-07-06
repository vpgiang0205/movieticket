import data from '../danhSachGhe.json'
const initialState = {
    listSeat : data,
    userEdit: null,
    keyword: "",
} ;
const seatReducer = (state = initialState) => {
    return {...state};
}

export default seatReducer;