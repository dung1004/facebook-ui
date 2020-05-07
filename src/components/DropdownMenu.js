import React, { Component } from 'react';
import DropdownItem from './DropdownItem';

import { ReactComponent as ChevronIcon } from './../icons/chevron.svg';
import { ReactComponent as CogIcon } from './../icons/cog.svg';

class DropdownMenu extends Component {
    render() {
        return (
            <div className="dropdown">
                <DropdownItem> My Profile </DropdownItem>
                <DropdownItem
                    leftIcon={ <CogIcon /> }
                    rightIcon={ <ChevronIcon /> }
                >

                </DropdownItem>
            </div>
        );
    }
}

export default DropdownMenu;