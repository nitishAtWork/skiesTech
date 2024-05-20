import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import ChildMenu from './ChildMenu';

const HasChildMenu = (props) => {

    const [isOpen, setIsopen] = useState(false);
    const toggleDropdown = () => {
        setIsopen(!isOpen);
    }

    const closeMenu = () => {
        props.closeMenu(false);
    };

    return (
        <li className='hasChild main'>
            <Link onClick={closeMenu} to={"/product"}>
                <span>{props.servName} <i class="fa-solid fa-plus"></i><i class="fa-solid fa-minus"></i></span>
            </Link>
            <i onClick={toggleDropdown} className="fa-solid fa-angle-down"></i>
            <ul className={isOpen ? 'active' : ''}>
                {props.catChild}
            </ul>
        </li>
    )
}

export default HasChildMenu
