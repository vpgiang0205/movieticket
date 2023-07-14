// seatActions.js
import { SELECT_SEAT, REMOVE_SEAT, RESET_SELECTED_SEATS } from './seatActionType';

export const selectSeat = (seat) => {
    return {
        type: SELECT_SEAT,
        payload: seat,
    };
};

export const removeSeat = (index) => {
    return {
        type: REMOVE_SEAT,
        payload: index,
    };
};

export const resetSelectedSeats = () => {
    return {
        type: RESET_SELECTED_SEATS,
    };
};