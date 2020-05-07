import React, { Component } from 'react';

import "./index.css";
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';

import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import DropdownMenu from './components/DropdownMenu';

class App extends Component {

    render() {
        return (
            <div>
                <Navbar>
                    <NavItem icon={ <PlusIcon/> } />
                    <NavItem icon={ <BellIcon /> } />
                    <NavItem icon={ <MessengerIcon /> } />
                    <NavItem icon={ <CaretIcon /> }>

                        <DropdownMenu></DropdownMenu>


                    </NavItem>
                </Navbar>
            </div>
        );
    }
}

export default App;