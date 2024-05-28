import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HasChildMenu from './HasChildMenu';
import ChildMenu from './ChildMenu';
import SubChildMenu from './SubChildMenu';

const MenuList = (props) => {

    const categories = props.categories;

    // const closeMenu = () => {
    //     props.closeMenu(false);
    // };

    const [isOpen, setIsopen] = useState(false);
    const toggleDropdown = () => {
        setIsopen(!isOpen);
    }

    const closeMenu = () => {
        props.closeMenu(false);
    };

    return (
        <ul>
            <li className='active'><Link onClick={closeMenu} to="/"><span>Home</span></Link></li>
            <HasChildMenu
                to={"/product"}
                closeMenu={closeMenu}
                servName={"Products"}
                catChild={
                    <ChildMenu
                        data={props.data}
                        closeMenu={closeMenu}
                        catChild={categories}
                    />
                }
            />


            <li ><Link onClick={closeMenu} to="/company-profile"> <span>Company Profile</span> </Link></li>

            <li ><Link onClick={closeMenu} to="/contact"> <span>Contact</span> </Link></li>
            <li ><Link onClick={closeMenu} to="/career"> <span>Career</span> </Link></li>
            <li ><Link onClick={closeMenu} to="/partner"> <span>Partner</span> </Link></li>
        </ul>
    )
}

export default MenuList
