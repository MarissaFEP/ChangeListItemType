import React, {PropTypes, PureComponent} from 'react';
import RadioItem from './RadioItem';
import CheckItem from './CheckItem';
import './ListItems.css';
import {SELTYPE} from './types.js';

export default class ListItems extends PureComponent {
    static propTypes = {
        selType: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired
    };

    render() {
        const {selType, options} = this.props;
        const Item = (selType === SELTYPE.SINGLE) ? RadioItem : CheckItem;
        const optionItems = options.map((option, index) => (
            <li className='ListItems-Item' key={index}>
                <Item name={selType} value={index.toString()}>{option.content}</Item>
            </li>
        ));

        return (
            <form>
                <ol className="ListItems-List">
                    {optionItems}
                </ol>
            </form>
        )
    };
}
