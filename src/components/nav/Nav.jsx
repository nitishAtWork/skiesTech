import React, { useState, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import './Nav.css';
import MenuList from './MenuList';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import LanguageIcon from '@mui/icons-material/Language';
import Socials from './Socials';
import BtnLink from '../BtnLink';
import PreLoader from '../sections/PreLoader';

const Nav = (props) => {

    const [categories, setCategories] = useState([]);
    const [isOpen, setIsopen] = useState(false);
    const [siteInfo, setSiteInfo] = useState([]);
    const [loadedData, setLoadedData] = useState(null);

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "en",
                autoDisplay: false
            },
            "google_translate_element"
        );
    };

    useEffect(() => {
        getCategories();
        getSiteInfo();
        var addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;

    }, []);


    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        setLoadedData(result);
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }

    const getCategories = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}/categories`);
        result = await result.json();
        if (result.status) {
            setCategories(result.data);
        }
    };

    // const {pathname} = useLocation();
    const toggleSidenav = () => {
        setIsopen(!isOpen);
    }

    // Close the navigation panel
    // useEffect(() => {
    //     setIsopen(!isOpen); 
    // }, [ pathname ]);

    return (
        <>
            {
                loadedData ? (
                    <>
                        <header className="Header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header-topbar-content">
                                            {/* socials */}
                                            <div className="cstm-socials">
                                                <Socials data={siteInfo} />
                                            </div>

                                            <div className="cstm-contact-infos">
                                                <ul>
                                                    <li><PhoneInTalkIcon /><a href={"tel:" + siteInfo.primaryPhone}>{siteInfo.primaryPhone}</a></li>
                                                    <li><ForwardToInboxIcon /><a href={"mailto:" + siteInfo.primaryMail}>{siteInfo.primaryMail}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='Language-bx'>
                                                <span className='Language-bx-flex' >
                                                    <LanguageIcon />
                                                    <div id="google_translate_element"></div>
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <nav className='Navbar'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='mainmenu-wrapper'>
                                            <div className='logo-box'>
                                                <Link to={'/'}><img src={process.env.REACT_APP_BASE_URL + 'images/' + siteInfo.logo} alt={siteInfo.compName} title={siteInfo.compName} /></Link>
                                            </div>
                                            {/* <div className='col-1'></div> */}
                                            <div className='Mainmenu'>
                                                {/* menu list appear here */}
                                                <MenuList data={props.data} categories={categories} closeMenu={setIsopen} />
                                            </div>
                                            <span onClick={toggleSidenav} className='menuBtn'><i className="fa-solid fa-bars-staggered"></i></span>
                                            <BtnLink Href="/partner" addClass='' btnName="Become Partner" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </nav>
                        {/* menu for mobile*/}
                        <div className={isOpen ? 'phone-nav-overlay active' : 'phone-nav-overlay'}>
                            <span onClick={toggleSidenav} className='close-nav'><i className="fa-solid fa-xmark"></i></span>
                            <div className='phone-nav'>
                                <div className='logo-box'>
                                    <Link to={'/'}><img onClick={toggleSidenav} src={process.env.REACT_APP_BASE_URL + 'images/' + siteInfo.logo} alt={siteInfo.compName} title={siteInfo.compName} /></Link>
                                </div>
                                {/* menu list appear here for mobile*/}
                                <MenuList categories={categories} closeMenu={setIsopen} />
                            </div>
                            <div>
                                {/* socials */}
                                <div className="cstm-socials"><Socials /></div>
                            </div>
                        </div>
                    </>
                ) :(
                    <PreLoader />
                )
        }

        </>
    );

}


export default Nav
