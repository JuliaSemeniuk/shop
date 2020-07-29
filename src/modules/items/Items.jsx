import React from 'react';

export default class Items extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { items } = this.props; //from reducer
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>img</td>
                            <td>name</td>
                            <td>price</td>
                            <td>basket functionality</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
