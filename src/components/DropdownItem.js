import React, { Component } from 'react';

class DropdownItem extends Component {
    render() {
        
        return (
            <a href="#" className="menu-item">
                <span className="icon-button"> { this.props.leftIcon } </span>
                    { this.props.children }
                <span className="icon-right"> { this.props.rightIcon } </span>
            </a>
        );
    }
}

export default DropdownItem;