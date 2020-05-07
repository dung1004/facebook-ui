import React, { Component } from 'react';

class NavItem extends Component {
    constructor(props) {
        super();
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <li className="nav-item">
                <a href="#" className="icon-button" onClick={ () => { this.setState({ open: !this.state.open  }); } }>
                    { this.props.icon }
                </a>
                { 
                    this.state.open && this.props.children
                }
            </li>
        );
    }
}

export default NavItem;