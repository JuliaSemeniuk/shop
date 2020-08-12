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

export const getItems = (response) => ({
    type: GET_ITEMS,
    payload: {
        items: response.map((value) => ({
            title: value.title,
            price: value.price,
            id: value.id,
            imageUrl: '',
        })),
    },
});

export const activateModalWindow = () => ({
    type: ACTIVATE_MODAL_WINDOW,
    payload: {
        isModalWindowActive: true,
    },
});

export const newItemsTitle = (newTitle) => ({
    type: NEW_TITLE,
    payload: {
        title: newTitle,
    },
});

export const newItemsPrice = (newPrice) => ({
    type: NEW_PRICE,
    payload: {
        price: newPrice,
    },
});

export const newItemsImageUrl = (newImageUrl) => ({
    type: NEW_IMAGE_URL,
    payload: {
        imageUrl: newImageUrl,
    },
});

export const addNewItem = (response) => ({
    type: ADD_NEW_ITEM,
    payload: {
        title: response.title,
        price: response.price,
        imageUrl: response.imgUrl,
        id: response.id,
    },
});

export const closeModalWindow = () => ({
    type: CLOSE_MODAL_WINDOW,
    payload: {
        isModalWindowActive: false,
    },
});

export const delItem = (newItems) => ({
    type: DELETE_ITEM,
    payload: {
        items: newItems,
    },
});
