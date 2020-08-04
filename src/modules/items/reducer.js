import { GET_ITEMS, ACTIVATE_MODAL_WINDOW } from './constants';

const initialState = {
    items: [],
    isModalWindowActive: false,
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS: {
            return {
                ...state,
                items: action.payload.items,
            };
        }

        case ACTIVATE_MODAL_WINDOW: {
            return {
                ...state,
                isModalWindowActive: action.payload.isModalWindowActive,
            };
        }
        default: {
            return state;
        } //state = initialState - initialisation of state at first time
    }
};

export default itemsReducer;
