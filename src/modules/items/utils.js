import { getItems, activateModalWindow, newItemsTitle } from './actions';

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
