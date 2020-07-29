import React from 'react';
import Items from './Items';
import { connect } from 'react-redux';

class ItemsContainer extends React.Component {
    render() {
        return <Items />;
    }
}

const mapStateToProps = (store) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
