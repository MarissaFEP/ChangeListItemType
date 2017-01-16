import React, {PropTypes, PureComponent} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

import RadioItem from './RadioItem';
import CheckItem from './CheckItem';
import ItemContent from './ItemContent';

import './ListItems.css';
import {SELTYPE} from './types.js';


const SortableItem = SortableElement(({option, idx}) => {  
    return (
        <li key={idx} className='ListItems-Item'>
            {option}
        </li>
    );
});

const SortableList = SortableContainer(({items, onChange}) => (
    <ol className="ListItems-List">
        {items.map((item, index) => (
            <SortableItem key={index} index={index} idx={index.toString()} option={item}/>
        ))}
    </ol>
));

export default class ListItems extends PureComponent {
    static propTypes = {
        selType: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired
    };

    render() {
        const {selType, options} = this.props;
        const Item = (selType === SELTYPE.SINGLE) ? RadioItem : CheckItem;

        const items = options.map((option, index) => (
            <Item name={selType} value={index.toString()}>
                <ItemContent content={option.content} onChange={this.handleContentChange(option, index)}/>
            </Item>    
        ));

        return (
            <form>
                <SortableList items={items} onSortEnd={this.handleSortEnd}/>
            </form>
        );
    }

    handleContentChange = (option, index) => (content) => {
        const {options, onChange} = this.props;
        const newOption = {content};
        const newOptions = [
            ...options.slice(0, index),
            newOption,
            ...options.slice(index + 1)
        ];

        onChange(newOptions);
    };

    handleSortEnd = ({oldIndex, newIndex}) => {
        const {options, onChange} = this.props;

        onChange(arrayMove(options, oldIndex, newIndex));
    };
}
