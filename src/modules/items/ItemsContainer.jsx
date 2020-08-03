import React from 'react';
import Items from './Items';
import { connect } from 'react-redux';
import { requestItems } from './utils';

class ItemsContainer extends React.Component {
    componentDidMount() {
        this.props.requestItems();
    }
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
    return {
        requestItems: () => requestItems(dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
