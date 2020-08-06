import { GET_ITEMS, ACTIVATE_MODAL_WINDOW, NEW_TITLE } from './constants';

const initialState = {
    items: [],
    isModalWindowActive: false,
    title: '',
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

        case NEW_TITLE: {
            return {
                ...state,
                title: action.payload.title,
            };
        }

        default: {
            return state;
        } //state = initialState - initialisation of state at first time
    }
};

export default itemsReducer;
