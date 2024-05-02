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
import { Parser } from 'html-to-react'



const Footer = () => {
    const [siteInfo, setSiteInfo] = useState([]);
    const [visitorCount, setVisitorCount] = useState(siteInfo.visitorCount + 1);
    const { pathname } = useLocation();


    // const [count, setCount] = useState(0);

    // useEffect(() => {
    // const storedCount = siteInfo.visitorCount;
    // const initialCount = storedCount ? siteInfo.visitorCount : 0;
    // setCount(initialCount + 1);
    // siteInfo.setSiteInfo("visitorCount", visitorCount + 1);

    // }, []);

    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            const url = process.env.REACT_APP_BASE_URL + "adminUpdateSiteInfo";
            fetch(
                url,
                {
                    method: "POST",
                    body: JSON.stringify({ 'visitorCount': result.siteInfo.visitorCount + 1 }),
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            setSiteInfo(result.siteInfo);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getSiteInfo();
        // setVisitorCount(visitorCount + 1);
        // const url = process.env.REACT_APP_BASE_URL + "adminUpdateSiteInfo";
        // fetch(
        //     url,
        //     {
        //         method: "POST",
        //         body: JSON.stringify({ 'visitorCount': visitorCount }),
        //         headers: { 'Content-Type': 'application/json' },
        //     }
        // );
    }, []);





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
                                <p className='ft-text'>
                                    <p>{Parser().parse(siteInfo.footerText)}</p>
                                </p>
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
                                            <li><span>/</span><Link to="/products">Products</Link></li>
                                            <li><span>/</span><Link to="/company-profile">Company Profile</Link></li>
                                            <li><span>/</span><Link to="/sitemap">Sitemap</Link></li>
                                            <li><span>/</span><Link to="/market-place">Market Place</Link></li>
                                            <li><span>/</span><Link to="/contact">Contact Us</Link></li>
                                            <li><span>/</span><Link to="/career">Career</Link></li>
                                            <li><span>/</span><Link to="/partner">Join Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='footer-widget mt-5'>
                                    <div className="flex-a-c">
                                        <p className='visitors-text'>Visitors: <span>{siteInfo.visitorCount}</span></p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='copy-box'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-12 '>
                                    <div className='copy-right-text'><span>Copyright © 2023 by Skiestech | Website Designed & Promoted by Insta Vyapar</span><a href="https://www.instavyapar.com/our-services/digital-marketing/google-promotion.html" target='_blank'>Google Promotion Services in India</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='Scroll-top-btn'> <ScrollToTop smooth /></div>

            {/* <div className="preloader">
                <div class="pl">
                    <div class="pl__bars">
                        <div class="pl__bar">
                            <div class="pl__bar-s"></div>
                            <div class="pl__bar-t"></div>
                            <div class="pl__bar-l"></div>
                            <div class="pl__bar-r"></div>
                        </div>
                        <div class="pl__bar">
                            <div class="pl__bar-s"></div>
                            <div class="pl__bar-t"></div>
                            <div class="pl__bar-l"></div>
                            <div class="pl__bar-r"></div>
                        </div>
                        <div class="pl__bar">
                            <div class="pl__bar-s"></div>
                            <div class="pl__bar-t"></div>
                            <div class="pl__bar-l"></div>
                            <div class="pl__bar-r"></div>
                        </div>
                        <div class="pl__bar">
                            <div class="pl__bar-s"></div>
                            <div class="pl__bar-t"></div>
                            <div class="pl__bar-l"></div>
                            <div class="pl__bar-r"></div>
                        </div>
                    </div>
                </div>
                <img src={process.env.REACT_APP_BASE_URL + 'images/' + siteInfo.logo} alt={siteInfo.compName} title={siteInfo.compName} />
            </div> */}

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
