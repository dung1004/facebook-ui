import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    {
                        this.props.children
                    }
                </ul>
            </nav>
        );
    }
}

export default Navbar;