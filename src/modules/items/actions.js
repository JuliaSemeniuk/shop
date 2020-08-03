import { GET_ITEMS } from './constants';

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
