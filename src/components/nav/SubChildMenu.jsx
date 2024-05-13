import React from 'react'
import { Link } from 'react-router-dom';

const SubChildMenu = (props) => {
    const closeMenu = () => {
        props.closeMenu(false);
    };
    console.log(props)
    return (
        props.servChild.map((value, index) =>
            <li key={index}>
                <Link
                    onClick={closeMenu}
                    to={
                        props.data !== undefined
                            ?
                            "/" + props.data.slug + "/" + value.slug
                            :
                            "/" + value.slug
                    }
                >

                    <span>{value.name}</span>
                </Link>
            </li>
        )
    )
}

export default SubChildMenu
