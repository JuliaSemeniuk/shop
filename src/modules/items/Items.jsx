import React from 'react';
import { ShoppingOutlined } from '@ant-design/icons';
import { DEFAULT_IMG_URL } from './constants';

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
        } = this.props; //from reducer
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
                                        onChange={onSetNewItemsTitle}
                                    ></input>
                                    <input
                                        placeholder="price"
                                        onChange={onSetNewItemsPrice}
                                    ></input>
                                    <input
                                        placeholder="image url"
                                        onChange={onSetNewItemsImageUrl}
                                    ></input>
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
                                    <input type="button" value="add" />
                                </form>
                            </React.Fragment>
                        )}
                    </div>

                    {items.map((value) => {
                        console.log(value.id);
                        return (
                            <div key={value.id}>
                                <div>
                                    <img
                                        src={
                                            value.imageUrl
                                                ? value.imageUrl
                                                : DEFAULT_IMG_URL
                                        }
                                    />
                                </div>
                                <div className="itemTitle">{value.title}</div>
                                <div className="itemTitle">{value.price}</div>
                                <div className="itemTitle">
                                    <button>
                                        <ShoppingOutlined />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
