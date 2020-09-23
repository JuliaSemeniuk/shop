import React from 'react';
import { withRouter } from 'react-router-dom';
import { ShoppingOutlined } from '@ant-design/icons';
import { DEFAULT_IMG_URL, ITEMS_PER_PAGE } from './constants';
import { List, Card } from 'antd';

class Items extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.search !== this.props.location.search) {
            let pageNumber = parseInt(
                nextProps.location.search.replace('?page=', '')
            );

            this.props.requestItems(
                (pageNumber - 1) * ITEMS_PER_PAGE,
                ITEMS_PER_PAGE
            );
        }
    }

    onChangePage = (page) => {
        this.props.history.push(`?page=${page}`);
    };

    render() {
        const {
            items,
            onActivateModalWindow,
            isModalWindowActive,
            onSetNewItemsTitle,
            onSetNewItemsPrice,
            onSetNewItemsImageUrl,
            onSetNewItem,
            title,
            price,
            imageUrl,
            onDeactivateModalWindow,
            onDeleteItem,
            onEditItem,
            onUpdateItem,
            editedItem,
            count,
        } = this.props; //from reducer
        console.log('this.pros: ', this.props);

        const data = items.map((value) => ({
            title: value.title,
            price: value.price,
            imageUrl: value.imageUrl,
            id: value.id,
        }));

        const pagesCount = Math.ceil(count / ITEMS_PER_PAGE);
        console.log('pagesCount: ', pagesCount);
        const pagesList = [];

        for (let i = 1; i <= pagesCount; i++) {
            pagesList.push(i);
        }

        console.log('pagesList: ', pagesList);

        console.log(('data', data));
        console.log('edited item: ', editedItem);

        return (
            <div>
                <div>
                    <div>
                        <button onClick={onActivateModalWindow}>
                            add item
                        </button>
                    </div>
                    <div>
                        {isModalWindowActive && (
                            <React.Fragment>
                                <form>
                                    <input
                                        placeholder="title"
                                        value={title}
                                        onChange={onSetNewItemsTitle}
                                    />
                                    <input
                                        placeholder="price"
                                        value={price}
                                        onChange={onSetNewItemsPrice}
                                    />
                                    <input
                                        placeholder="image url"
                                        value={imageUrl}
                                        onChange={onSetNewItemsImageUrl}
                                    />
                                    <p>in stock</p>
                                    <input
                                        type="radio"
                                        name="inStockRadio"
                                        value="yes"
                                    />
                                    Yes
                                    <input
                                        type="radio"
                                        name="inStockRadio"
                                        value="no"
                                    />
                                    No
                                    <div>
                                        <input
                                            type="button"
                                            value="add"
                                            onClick={
                                                editedItem
                                                    ? onUpdateItem
                                                    : onSetNewItem
                                            }
                                        />
                                        <input
                                            type="button"
                                            value="cancel"
                                            onClick={onDeactivateModalWindow}
                                        />
                                    </div>
                                </form>
                            </React.Fragment>
                        )}
                    </div>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={data}
                        renderItem={(value) => (
                            <List.Item>
                                <Card title={value.title}>
                                    <div className="item" key={value.id}>
                                        <div className="containerImage">
                                            <img
                                                className="itemImg"
                                                src={
                                                    value.imageUrl
                                                        ? value.imageUrl
                                                        : DEFAULT_IMG_URL
                                                }
                                            />
                                        </div>
                                        <div className="containerPrice">
                                            ${value.price}
                                        </div>
                                        <div className="containerButtons">
                                            <button>
                                                <ShoppingOutlined />
                                            </button>
                                            <button
                                                id={value.id}
                                                onClick={onDeleteItem}
                                            >
                                                delete
                                            </button>
                                            <button
                                                id={value.id}
                                                onClick={onEditItem}
                                            >
                                                edit
                                            </button>
                                        </div>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                    {pagesList.map((pageNum) => (
                        <span onClick={() => this.onChangePage(pageNum)}>
                            {pageNum}
                        </span>
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(Items);
