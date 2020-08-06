import React from 'react';
import Items from './Items';
import { connect } from 'react-redux';
import { requestItems, modalWindow, setNewItemsTitle } from './utils';

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

    render() {
        const { items, isModalWindowActive } = this.props;
        return (
            <Items
                items={items}
                isModalWindowActive={isModalWindowActive}
                onActivateModalWindow={this.onActivateModalWindow}
                onSetNewItemsTitle={this.onSetNewItemsTitle}
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
