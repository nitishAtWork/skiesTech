import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Socials from '../nav/Socials';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import ScrollToTop from 'react-scroll-to-top';
import { useLocation } from 'react-router-dom';



const Footer = () => {
    const [siteInfo, setSiteInfo] = useState([]);
    const { pathname } = useLocation();

    // useEffect(() => {
    //     getSiteInfo();
    // }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
        getSiteInfo();
    }, [pathname]);

    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }

    const actions = [
        { icon: <PhoneForwardedIcon />, name: 'Call Now', href: 'tel:' + siteInfo.primaryPhone },
        { icon: <ForwardToInboxIcon />, name: 'Mail Now', href: 'mailto:' + siteInfo.primaryMail },
        { icon: <WhatsAppIcon />, name: 'Whatsapp', href: 'https://api.whatsapp.com/send/?phone=' + siteInfo.whatsapp },
        { icon: <ShareIcon />, name: 'Share', href: '' },
    ];

    return (
        <>
            <footer>
                <div className='Footer-top'>
                    <div className='container'></div>
                </div>
                <div className='footer-main'>
                    {/* <div className="btm-layer"></div>
                    <div className="btm-layer2"></div>
                    <div className="btm-layer3">
                        <img src={process.env.REACT_APP_BASE_URL + "images/bg/web-development.gif"} alt="" />
                    </div> */}
                    <div className='container'>
                        <div className='row justify-content-between'>
                            <div className='col-12'>
                                <div className='ft-logo-box'>
                                    <Link to={'/'}><img src={process.env.REACT_APP_BASE_URL + 'images/' + siteInfo.logo} alt={siteInfo.compName} title={siteInfo.compName} /></Link>
                                </div>
                                <p className='ft-text'>We as the major I.V. Infusion Set Suppliers in Pune have many medical items like I.V. Infusion Set, Blood Administration Set, Ryles Tube, Twin Bore Nasal Oxygen Set, Yankauer Suction Set, Umbilical Cord Clamp, Infusion Set, IV Set, Blood Administration Set, Disposable Medical Devices, so you can find the right item for you. the items available are made with high-quality materials so don't worry about it. we also provide a guide where some instructions are written so you do not get confused about the usage.</p>
                                <div className="colored-scls ">
                                    <Socials data={siteInfo} />
                                </div>
                            </div>
                            <div className='col-12 m-t40'>
                                <div className='footer-widget'>
                                    <div className="flex-a-c">
                                        <p className='title-ft'>Useful Links: - </p>
                                        <ul className='links'>
                                            <li><Link to="/">Home</Link></li>
                                            <li><span>/</span><Link to="/services">Services</Link></li>
                                            <li><span>/</span><Link to="/company-profile">Company Profile</Link></li>
                                            <li><span>/</span><Link to="/sitemap">Sitemap</Link></li>
                                            <li><span>/</span><Link to="/market-place">Market Place</Link></li>
                                            <li><span>/</span><Link to="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='col-lg-4 col-md-6 m-t40'>
                                <div className='footer-widget'>
                                    <p className='title-ft'>Contact Info</p>

                                    <div className='contacts-box m-t30'>
                                        <div className='cont-icn'><i className="fa-solid fa-phone-volume"></i></div>
                                        <div className='conta-links'>
                                            <span className='title'>Phone</span>
                                            <a href={"tel:" + siteInfo.primaryPhone}>{siteInfo.primaryPhone}</a>
                                        </div>
                                    </div>
                                    <div className='contacts-box'>
                                        <div className='cont-icn'><i className="fa-solid fa-envelope-open-text"></i></div>
                                        <div className='conta-links'>
                                            <span className='title'>Email</span>
                                            <a href={"mailto:" + siteInfo.primaryMail}>{siteInfo.primaryMail}</a>
                                        </div>
                                    </div>
                                    <div className='contacts-box'>
                                        <div className='cont-icn'><i className="fa-solid fa-map-location-dot"></i></div>
                                        <div className='conta-links'>
                                            <span className='title'>Address</span>
                                            <span>{siteInfo.primaryAddress}</span>
                                        </div>

                                    </div>
                                   

                                </div>
                            </div> */}

                        </div>
                    </div>
                    <div className='copy-box'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-12 '>
                                    <div className='copy-right-text'><span>Copyright © 2024. Powered By </span><a href="https://www.instavyapar.com" target='_blank'>Insta Vyapar</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='Scroll-top-btn'> <ScrollToTop smooth /></div>
            {/* <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 54, left: 26 }}
                icon={<AddIcCallIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        href={action.href}
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial> */}
            {/* <div className="colored-scls fixed-scl">
                <Socials data={siteInfo} />
            </div> */}
        </>
    )
}

export default Footer
