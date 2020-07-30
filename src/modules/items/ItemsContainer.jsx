import React from 'react';
import Items from './Items';
import { connect } from 'react-redux';

class ItemsContainer extends React.Component {
    render() {
        const { items } = this.props;
        return <Items items={items} />;
    }
}

const mapStateToProps = (store) => {
    console.log('store: ' + store);
    return {
        items: store.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
