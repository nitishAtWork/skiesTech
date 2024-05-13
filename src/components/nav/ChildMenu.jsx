import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SubChildMenu from './SubChildMenu';

const ChildMenu = (props) => {

    const [isOpen, setIsopen] = useState(false);
    const toggleDropdown = () => {
        setIsopen(!isOpen);
    }

    const closeMenu = () => {
        props.closeMenu(false);
    };

    return (
        props.catChild.map((value, index) =>
            <li key={index} className='hasChild sub'>
                <Link onClick={closeMenu} to={"/products"}>
                    <span>{value.name} <i class="fa-solid fa-plus"></i><i class="fa-solid fa-minus"></i></span>
                </Link>
                <i onClick={toggleDropdown} className="fa-solid fa-angle-down"></i>
                <ul className={isOpen ? 'active' : '' + " sub-menu-ul-in"}>
                    {
                        <SubChildMenu
                            data={props.data}
                            closeMenu={closeMenu}
                            servChild={value.products}
                        />
                    }
                </ul>
            </li>
        )
    )
}

export default ChildMenu
