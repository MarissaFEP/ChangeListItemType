import React, {PropTypes, PureComponent} from 'react';

export default class RadioItem extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired
    };

    render() {
        const {name, value, children} = this.props;
        return (
            <div>
                <input type='radio' name={name} value={value}/>
                {children}
            </div>
        );
    }
}