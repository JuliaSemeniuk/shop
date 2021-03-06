import {
    GET_ITEMS,
    ACTIVATE_MODAL_WINDOW,
    NEW_TITLE,
    NEW_PRICE,
    NEW_IMAGE_URL,
    ADD_NEW_ITEM,
    CLOSE_MODAL_WINDOW,
    DELETE_ITEM,
    EDIT_ITEM,
    UPDATE_ITEM,
} from './constants';

export const getItems = (items, count) => ({
    type: GET_ITEMS,
    payload: {
        items: items.map((value) => ({
            title: value.title,
            price: value.price,
            id: value.id,
            imageUrl: '',
        })),
        count: count,
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

export const actionEditItem = (currentItem, id) => {
    console.log('key: ', currentItem);
    return {
        type: EDIT_ITEM,
        payload: {
            id,
            title: currentItem.title,
            price: currentItem.price,
            imageUrl: currentItem.imgUrl,
            isModalWindowActive: true,
        },
    };
};

export const actionUpdateItem = (newItems) => {
    return {
        type: UPDATE_ITEM,
        payload: {
            items: newItems,
            isModalWindowActive: false,
            editedItem: null,
        },
    };
};
