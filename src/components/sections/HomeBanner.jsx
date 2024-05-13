import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PreLoader from './PreLoader';
// import required modules
import { Autoplay, Navigation, FreeMode } from 'swiper/modules';

const HomeBanner = () => {

    const [banners, setBanner] = useState([]);
    const [loadedData, setLoadedData] = useState(null);

    useEffect(() => {
        getBanners();
    }, []);

    const getBanners = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}banners`);
        result = await result.json();
        setLoadedData(result);
        if (result.status) {
            setBanner(result.banners);
        }
    }

    return (
        <>
            {loadedData ? (
                <>
                    <Swiper
                        autoplay={{
                            delay: 6500,
                            disableOnInteraction: false,
                            // stopOnLastSlide: false,
                        }}
                        loop={true}
                        speed={1000}
                        navigation={{
                            prevEl: '.prev-slide',
                            nextEl: '.next-slide',
                        }}
                        modules={[FreeMode, Autoplay, Navigation]}
                        className="home-slider hero-slide-h">
                        {/* <div className="colored-scls ban-scl">
                       <Socials data={siteInfo} />
                    </div> */}
                        {
                            banners
                                ?
                                banners.map((value, index) =>
                                    <SwiperSlide key={index}>
                                        <img className='w-100' src={process.env.REACT_APP_BASE_URL + 'images/banners/' + value.img} alt={value.name} title={value.name} />
                                    </SwiperSlide>
                                )
                                :
                                null
                        }
                        <div className="prev-slide slide-btn"><span><ArrowBackIcon /></span></div>
                        <div className="next-slide slide-btn"><span><ArrowForwardIcon /></span></div>
                    </Swiper>
                </>
            ) : (
                <PreLoader />
            )}

        </>
    )
}

export default HomeBanner
