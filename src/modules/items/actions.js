import {
    GET_ITEMS,
    ACTIVATE_MODAL_WINDOW,
    NEW_TITLE,
    NEW_PRICE,
    NEW_IMAGE_URL,
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
