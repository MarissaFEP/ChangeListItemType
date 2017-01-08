import React, {PropTypes, PureComponent} from 'react';
import './SelType.css'
import RadioGroup from './RadioGroup';
import Radio from './Radio';
import {SELTYPE} from './types';

export default class SetType extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    state = {
        value: this.props.value
    };

    handleChange = (selected) => {
        this.setState({value: selected});
        this.props.onChange(selected);
    }

    render() {
        return (
            <form className='SelType-Form'>
                <RadioGroup name='selection' selected={this.state.value} onChange={this.handleChange}>
                    <Radio value={SELTYPE.SINGLE}>Single</Radio>
                    <Radio value={SELTYPE.MULTIPLE}>Multiple</Radio>
                </RadioGroup>
            </form>
        );
    }
}