import React from 'react'

const PreLoader = () => {
    return (
        <div className="preloader">
            <div className="pl">
                <div className="pl__bars">
                    <div className="pl__bar">
                        <div className="pl__bar-s"></div>
                        <div className="pl__bar-t"></div>
                        <div className="pl__bar-l"></div>
                        <div className="pl__bar-r"></div>
                    </div>
                    <div className="pl__bar">
                        <div className="pl__bar-s"></div>
                        <div className="pl__bar-t"></div>
                        <div className="pl__bar-l"></div>
                        <div className="pl__bar-r"></div>
                    </div>
                    <div className="pl__bar">
                        <div className="pl__bar-s"></div>
                        <div className="pl__bar-t"></div>
                        <div className="pl__bar-l"></div>
                        <div className="pl__bar-r"></div>
                    </div>
                    <div className="pl__bar">
                        <div className="pl__bar-s"></div>
                        <div className="pl__bar-t"></div>
                        <div className="pl__bar-l"></div>
                        <div className="pl__bar-r"></div>
                    </div>
                </div>
            </div>
            {/* <img src={process.env.REACT_APP_BASE_URL + 'images/' + siteInfo.logo} alt={siteInfo.compName} title={siteInfo.compName} /> */}
        </div>
    )
}

export default PreLoader
