import React, {PureComponent, PropTypes} from 'react';

export default class ItemContent extends PureComponent {
    static propTypes = {
        content: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    render() {
        const {content} = this.props.content;

        return (
            <input type='text' value={content} placeholder='enter item here ...' onChange={this.handleChange}/>
        );
    }

    handleChange = (event) => {
        this.props.onChange(event.target.value);
    }
}
