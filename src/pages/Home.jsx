import React, { useState, useEffect, lazy, Suspense } from 'react';
import Nav from '../components/nav/Nav';
import PreLoader from '../components/sections/PreLoader';
import Testimonial from '../components/sections/Testimonial';
import ContactSect from '../components/sections/ContactSect';
import HelmetComp from '../components/HelmetComp';
import Footer from '../components/sections/Footer';
const WhyChoose = lazy(() => import('../components/sections/WhyChoose'));
const CompanyProfile = lazy(() => import('../components/sections/CompanyProfile'));
const CategoriesSect = lazy(() => import('../components/sections/CategoriesSect'));
const HomeBanner = lazy(() => import('../components/sections/HomeBanner'));

const Home = () => {

  const [homeData, setHomeData] = useState([]);
  const [loadedData, setLoadedData] = useState(null);

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}home`);
    result = await result.json();
    setLoadedData(result);
    if (result.status) {
      setHomeData(result.home);
    }
  }


  return (
    <>
      {loadedData ? (
        <>
          <HelmetComp metaData={homeData}></HelmetComp>
          <Nav />
          <Suspense fallback={<PreLoader />}>
            <HomeBanner />
          </Suspense>
          <WhyChoose />
          <Suspense fallback={<PreLoader />}>
            <CompanyProfile pageData={homeData} homeTitle={homeData.shortDescription} />
          </Suspense>
          <Suspense fallback={<PreLoader />}>
            <CategoriesSect />
          </Suspense>
          <Testimonial />
          <ContactSect />
          <Footer />
        </>
      ) : (
        <PreLoader />
      )}
      {/* <HelmetComp metaData={homeData} /> */}


    </>
  )
}

export default Home
