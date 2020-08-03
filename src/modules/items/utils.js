import { getItems } from './actions';

export const requestItems = (dispatch) => {
    fetch(
        'https://afternoon-woodland-11428.herokuapp.com/items?offset=0&limit=5'
    )
        .then((response) => response.json())
        .then((response) => {
            dispatch(getItems(response));
        });
};
