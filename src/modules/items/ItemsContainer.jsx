import React from 'react';
import Items from './Items';
import { connect } from 'react-redux';
import { requestItems, modalWindow } from './utils';

class ItemsContainer extends React.Component {
    componentDidMount() {
        this.props.requestItems();
    }

    onActivateModalWindow = () => {
        this.props.modalWindow();
    };

    onSet;

    render() {
        const { items, isModalWindowActive, id } = this.props;
        return (
            <Items
                items={items}
                isModalWindowActive={isModalWindowActive}
                onActivateModalWindow={this.onActivateModalWindow}
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
