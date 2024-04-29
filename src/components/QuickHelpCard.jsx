import {React, useState, useEffect} from 'react'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

const QuickHelpCard = () => {
    const [siteInfo, setSiteInfo] = useState([]);

    useEffect(() => {
        getSiteInfo();

    });

    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }
    return (
        <div className="all__sidebar-item-help"  >
            <img className="support-bg" src={process.env.REACT_APP_BASE_URL + "images/img/support.jpg"} alt="Support Iwt" />
            <img className="support-bg-texture" src={process.env.REACT_APP_BASE_URL + "images/img/support.png"} alt="Support Iwt" />
            <div className="support-det">
                <p className='sprt-h'>Contact Now!</p>
                <div className="all__sidebar-item-help-contact">
                    <PhoneInTalkOutlinedIcon />
                    <div className="all__sidebar-item-help-contact-content">
                        <span>Quick Help</span>
                        <a href={"tel:" + siteInfo.primaryPhone}>{siteInfo.primaryPhone}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickHelpCard
