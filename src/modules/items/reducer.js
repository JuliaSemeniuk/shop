import {
    GET_ITEMS,
    ACTIVATE_MODAL_WINDOW,
    NEW_TITLE,
    NEW_PRICE,
    NEW_IMAGE_URL,
} from './constants';

const initialState = {
    items: [],
    isModalWindowActive: false,
    title: '',
    price: '',
    imageUrl: '',
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

        case NEW_PRICE: {
            return {
                ...state,
                price: action.payload.price,
            };
        }

        case NEW_IMAGE_URL: {
            return {
                ...state,
                imageUrl: action.payload.imageUrl,
            };
        }

        default: {
            return state;
        } //state = initialState - initialisation of state at first time
    }
};

export default itemsReducer;
