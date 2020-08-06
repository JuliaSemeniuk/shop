import {
    getItems,
    activateModalWindow,
    newItemsTitle,
    newItemsPrice,
    newItemsImageUrl,
} from './actions';

export const requestItems = (dispatch) => {
    fetch(
        'https://afternoon-woodland-11428.herokuapp.com/items?offset=0&limit=5'
    )
        .then((response) => response.json())
        .then((response) => {
            dispatch(getItems(response));
        });
};

export const modalWindow = (dispatch) => {
    dispatch(activateModalWindow());
};

export const setNewItemsTitle = (event, dispatch) => {
    let newTitle = event.target.value;
    dispatch(newItemsTitle(newTitle));
};

export const setNewItemsPrice = (event, dispatch) => {
    let newPrice = event.target.value;
    dispatch(newItemsPrice(newPrice));
};

export const setNewItemsImageUrl = (event, dispatch) => {
    let newImageUrl = event.target.value;
    dispatch(newItemsImageUrl(newImageUrl));
};
