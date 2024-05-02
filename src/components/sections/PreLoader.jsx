import React from 'react'

const PreLoader = () => {
    return (
        <div className="preloader">
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
            {/* <img src={process.env.REACT_APP_BASE_URL + 'images/' + siteInfo.logo} alt={siteInfo.compName} title={siteInfo.compName} /> */}
        </div>
    )
}

export default PreLoader
