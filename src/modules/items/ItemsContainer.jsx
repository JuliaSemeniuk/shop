import React from 'react';
import Items from './Items';
import { connect } from 'react-redux';
import {
    requestItems,
    modalWindow,
    setNewItemsTitle,
    setNewItemsPrice,
    setNewItemsImageUrl,
    setNewItem,
    deactivateModalWindow,
    deleteItem,
    editItem,
    updateItem,
} from './utils';

import { ITEMS_PER_PAGE } from './constants';

class ItemsContainer extends React.Component {
    componentDidMount() {
        this.props.requestItems(0, ITEMS_PER_PAGE);
    }

    onActivateModalWindow = () => {
        this.props.modalWindow();
    };

    onSetNewItemsTitle = (event) => {
        this.props.setNewItemsTitle(event);
    };

    onSetNewItemsPrice = (event) => {
        this.props.setNewItemsPrice(event);
    };

    onSetNewItemsImageUrl = (event) => {
        this.props.setNewItemsImageUrl(event);
    };

    onSetNewItem = () => {
        this.props.setNewItem(
            this.props.title,
            this.props.price,
            this.props.imageUrl
        );
    };

    onDeactivateModalWindow = () => {
        this.props.deactivateModalWindow();
    };

    onDeleteItem = (event) => {
        console.log('id:', event.target.id);
        this.props.deleteItem(+event.target.id, this.props.items); //+привести до Number, бо в івент потрапляє строка
    };

    onEditItem = (event) => {
        this.props.editItem(+event.target.id, this.props.items);
    };

    onUpdateItem = (event) => {
        this.props.updateItem(
            this.props.items,
            this.props.title,
            this.props.price,
            this.props.imageUrl,
            this.props.editedItem
        );
    };

    render() {
        const {
            items,
            isModalWindowActive,
            title,
            price,
            imageUrl,
            editedItem,
            count,
        } = this.props;
        return (
            <Items
                items={items}
                isModalWindowActive={isModalWindowActive}
                onActivateModalWindow={this.onActivateModalWindow}
                onSetNewItemsTitle={this.onSetNewItemsTitle}
                onSetNewItemsPrice={this.onSetNewItemsPrice}
                onSetNewItemsImageUrl={this.onSetNewItemsImageUrl}
                onSetNewItem={this.onSetNewItem}
                title={title}
                price={price}
                imageUrl={imageUrl}
                onDeactivateModalWindow={this.onDeactivateModalWindow}
                onDeleteItem={this.onDeleteItem}
                onEditItem={this.onEditItem}
                onUpdateItem={this.onUpdateItem}
                editedItem={editedItem}
                count={count}
            />
        );
    }
}

const mapStateToProps = (store) => {
    console.log('store: ' + store);
    return {
        items: store.items,
        isModalWindowActive: store.isModalWindowActive,
        title: store.title,
        price: store.price,
        imageUrl: store.imageUrl,
        editedItem: store.editedItem,
        count: store.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestItems: (offset, limit) => requestItems(dispatch, offset, limit),
        modalWindow: () => modalWindow(dispatch),
        setNewItemsTitle: (event) => setNewItemsTitle(event, dispatch),
        setNewItemsPrice: (event) => setNewItemsPrice(event, dispatch),
        setNewItemsImageUrl: (event) => setNewItemsImageUrl(event, dispatch),
        setNewItem: (title, price, imageUrl) =>
            setNewItem(dispatch, title, price, imageUrl),
        deactivateModalWindow: () => deactivateModalWindow(dispatch),
        deleteItem: (id, items) => deleteItem(dispatch, id, items),
        editItem: (id, items) => editItem(dispatch, id, items),
        updateItem: (items, title, price, imageUrl, editedItem) =>
            updateItem(dispatch, items, title, price, imageUrl, editedItem),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
