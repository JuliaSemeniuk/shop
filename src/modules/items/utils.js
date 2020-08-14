import {
    getItems,
    activateModalWindow,
    newItemsTitle,
    newItemsPrice,
    newItemsImageUrl,
    addNewItem,
    closeModalWindow,
    delItem,
    actionEditItem,
    actionUpdateItem,
} from './actions';

export const requestItems = (dispatch) => {
    fetch(
        'https://afternoon-woodland-11428.herokuapp.com/items?offset=0&limit=100'
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

export const setNewItem = (dispatch, title, price, imageUrl) => {
    const params = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify({
            title: title,
            price: parseInt(price),
            imageUrl: imageUrl,
        }),
    };

    const promise = fetch(
        'https://afternoon-woodland-11428.herokuapp.com/items',
        params
    )
        .then((response) => response.json())
        .then((response) => {
            dispatch(addNewItem(response));
        });
};

export const deactivateModalWindow = (dispatch) => {
    dispatch(closeModalWindow());
};

export const deleteItem = (dispatch, id, items) => {
    fetch('https://afternoon-woodland-11428.herokuapp.com/items/' + id, {
        method: 'DELETE',
        mode: 'cors',
    })
        .then((response) => response.json())
        .then(() => {
            const index = items.findIndex((item) => item.id === id);
            const newItems = items.slice();
            newItems.splice(index, 1);
            dispatch(delItem(newItems));
        });
};

export const editItem = (dispatch, id, items) => {
    const currentItem = items.find((item) => item.id === id);
    console.log('current item:', currentItem);
    dispatch(actionEditItem(currentItem, id));
};

export const updateItem = (
    dispatch,

    items,
    title,
    price,
    imageUrl,
    editedItem
) => {
    fetch(
        'https://afternoon-woodland-11428.herokuapp.com/items/' + editedItem,
        {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            body: JSON.stringify({
                title: title,
                price: parseInt(price),
                imageUrl: imageUrl,
            }),
        }
    )
        .then((response) => response.json())
        .then(() => {
            const newItems = items.slice();
            const index = items.findIndex(
                (item) => item.editedItem === editedItem
            );
            newItems[index] = {
                id: editedItem,
                title: title,
                price: parseInt(price),
                imageUrl: imageUrl,
            };
            dispatch(actionUpdateItem(newItems));
        });

    console.log('edite item: ', editedItem);
};
