import React, {PureComponent} from 'react';

export default class CheckItem extends PureComponent {
    render() {
        const {name, value, children} = this.props;
        return (
            <div>
                <input type='checkbox' name={name} value={value}/>
                {children}
            </div>
        );
    }
}
