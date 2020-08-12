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
} from './utils';

class ItemsContainer extends React.Component {
    componentDidMount() {
        this.props.requestItems();
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

    render() {
        const {
            items,
            isModalWindowActive,
            title,
            price,
            imageUrl,
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestItems: () => requestItems(dispatch),
        modalWindow: () => modalWindow(dispatch),
        setNewItemsTitle: (event) => setNewItemsTitle(event, dispatch),
        setNewItemsPrice: (event) => setNewItemsPrice(event, dispatch),
        setNewItemsImageUrl: (event) => setNewItemsImageUrl(event, dispatch),
        setNewItem: (title, price, imageUrl) =>
            setNewItem(dispatch, title, price, imageUrl),
        deactivateModalWindow: () => deactivateModalWindow(dispatch),
        deleteItem: (id, items) => deleteItem(dispatch, id, items),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
