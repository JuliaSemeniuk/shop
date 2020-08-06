import React from 'react';
import Items from './Items';
import { connect } from 'react-redux';
import {
    requestItems,
    modalWindow,
    setNewItemsTitle,
    setNewItemsPrice,
    setNewItemsImageUrl,
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

    render() {
        const { items, isModalWindowActive } = this.props;
        return (
            <Items
                items={items}
                isModalWindowActive={isModalWindowActive}
                onActivateModalWindow={this.onActivateModalWindow}
                onSetNewItemsTitle={this.onSetNewItemsTitle}
                onSetNewItemsPrice={this.onSetNewItemsPrice}
                onSetNewItemsImageUrl={this.onSetNewItemsImageUrl}
            />
        );
    }
}

const mapStateToProps = (store) => {
    console.log('store: ' + store);
    return {
        items: store.items,
        isModalWindowActive: store.isModalWindowActive,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestItems: () => requestItems(dispatch),
        modalWindow: () => modalWindow(dispatch),
        setNewItemsTitle: (event) => setNewItemsTitle(event, dispatch),
        setNewItemsPrice: (event) => setNewItemsPrice(event, dispatch),
        setNewItemsImageUrl: (event) => setNewItemsImageUrl(event, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
