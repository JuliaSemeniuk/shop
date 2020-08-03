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
        } = this.props; //from reducer
        return (
            <div>
                <table>
                    <tbody>
                        <div>
                            <button onClick={onActivateModalWindow}>
                                add item
                            </button>
                        </div>
                        <div>
                            {isModalWindowActive && (
                                <React.Fragment>
                                    <input placeholder="bla"></input>
                                </React.Fragment>
                            )}
                        </div>
                        {items.map((value) => {
                            return (
                                <div>
                                    <div>
                                        <img
                                            src={
                                                value.imageUrl
                                                    ? value.imageUrl
                                                    : DEFAULT_IMG_URL
                                            }
                                        />
                                    </div>
                                    <div class="itemTitle">{value.title}</div>
                                    <div class="itemTitle">{value.price}</div>
                                    <div class="itemTitle">
                                        <button>
                                            <ShoppingOutlined />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
