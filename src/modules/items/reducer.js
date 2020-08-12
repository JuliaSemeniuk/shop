import {
    GET_ITEMS,
    ACTIVATE_MODAL_WINDOW,
    NEW_TITLE,
    NEW_PRICE,
    NEW_IMAGE_URL,
    ADD_NEW_ITEM,
    CLOSE_MODAL_WINDOW,
    DELETE_ITEM,
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
                isModalWindowActive: false,
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

        case ADD_NEW_ITEM: {
            const newItems = state.items.slice();
            newItems.push({
                title: action.payload.title,
                price: action.payload.price,
                imageUrl: action.payload.imgUrl,
                id: action.payload.id,
            });
            return {
                ...state,
                items: newItems,
                title: '',
                price: '',
                imageUrl: '',
            };
        }

        case CLOSE_MODAL_WINDOW: {
            return {
                ...state,
                title: '',
                price: '',
                imageUrl: '',
                isModalWindowActive: action.payload.isModalWindowActive,
            };
        }

        case DELETE_ITEM: {
            return {
                ...state,
                items: action.payload.items,
            };
        }

        default: {
            return state;
        } //state = initialState - initialisation of state at first time
    }
};

export default itemsReducer;
