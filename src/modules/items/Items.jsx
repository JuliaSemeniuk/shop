import React from 'react';
import { ShoppingOutlined } from '@ant-design/icons';
import { DEFAULT_IMG_URL } from './constants';
import { List, Card } from 'antd';

export default class Items extends React.Component {
    constructor(props) {
        super(props);
    }

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
        } = this.props; //from reducer

        const data = items.map((value) => ({
            title: value.title,
            price: value.price,
            imageUrl: value.imageUrl,
            id: value.id,
        }));

        console.log(('data', data));

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
                                    <input
                                        type="button"
                                        value="add"
                                        onClick={onSetNewItem}
                                    />
                                    <input
                                        type="button"
                                        value="cancel"
                                        onClick={onDeactivateModalWindow}
                                    />
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
                                                onClick={() =>
                                                    onDeleteItem(value.id)
                                                }
                                            >
                                                delete
                                            </button>
                                        </div>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}
