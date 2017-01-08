import React, {PropTypes, PureComponent} from 'react';

export default class Radio extends PureComponent {
    static propTypes = {
        radioGroupProps: PropTypes.object,
        value: PropTypes.string.isRequired,
    };

    handleChange = (event) => {
        this.props.radioGroupProps.onChange(event.target.value);
    }

    render() {
        if (!this.props.radioGroupProps) {
            throw new Error('radioGroupProps is undefined!!!');
        }

        const {name, selected} = this.props.radioGroupProps;
        const {value} = this.props;

        return (
            <label>
                <input type='radio' name={name} value={value} checked={(selected === value)} onChange={this.handleChange}/>
                {this.props.children}
            </label>
        );
    }
}