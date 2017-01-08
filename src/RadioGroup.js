import React, {PropTypes, PureComponent, Children} from 'react';


export default class RadioGroup extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        selected: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        children: PropTypes.arrayOf(PropTypes.node).isRequired
    };
    
    render() {
        return (
            <div>
                {Children.map(this.props.children, (radio) => (
                    React.cloneElement(radio, {radioGroupProps: this.props})
                ))}
            </div>
        );
    }
}