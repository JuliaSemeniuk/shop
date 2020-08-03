import { GET_ITEMS, ACTIVATE_MODAL_WINDOW } from './constants';

export const getItems = (response) => ({
    type: GET_ITEMS,
    payload: {
        items: response.map((value) => ({
            title: value.title,
            price: value.price,
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
