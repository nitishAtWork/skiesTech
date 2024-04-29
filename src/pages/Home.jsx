import React, { useState, useEffect, lazy, Suspense } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Nav from '../components/nav/Nav';
// import HomeBanner from '../components/sections/HomeBanner';
import FeaturesSect from '../components/sections/FeaturesSect';
import StepsSect from '../components/sections/StepsSect';
import Testimonial from '../components/sections/Testimonial';
import ContactSect from '../components/sections/ContactSect';
// import ProductSection from './components/sections/ProductSection';
import HelmetComp from '../components/HelmetComp';
import Footer from '../components/sections/Footer';
// import CompanyProfile from '../components/sections/CompanyProfile';
// import WhyChoose from '../components/sections/WhyChoose';
const WhyChoose = lazy(() => import('../components/sections/WhyChoose'));
const CompanyProfile = lazy(() => import('../components/sections/CompanyProfile'));
const ProductSlider = lazy(() => import('../components/sections/ProductSlider'));
const ProductSection = lazy(() => import('../components/sections/ProductSection'));
const WelcomeText = lazy(() => import('../components/sections/WelcomeText'));
const HomeBanner = lazy(() => import('../components/sections/HomeBanner'));

const Home = () => {

  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}home`);
    result = await result.json();
    if (result.status) {
      setHomeData(result.home);
    }
  }

  return (
    <>
      {/* <HelmetComp metaData={homeData} /> */}
      <Nav />
      <Suspense fallback={<SkeletonTheme baseColor="#f5f4f4" highlightColor="#cfcece"> <p> <Skeleton count={31} /> </p> </SkeletonTheme>}>
        <HomeBanner />
      </Suspense>
      <WhyChoose />
      <Suspense fallback={<Skeleton count={24} />}>
        <CompanyProfile pageData={homeData} homeTitle={homeData.shortDescription} />
      </Suspense>
      <Suspense fallback={<Skeleton count={10} />}>
        <ProductSection />
      </Suspense>
      {/* <Suspense fallback={<Skeleton count={10} />}>
        <ProductSlider />
      </Suspense> */}
      <Testimonial />
      <ContactSect />
      {/* <Suspense fallback={<Skeleton count={5} />}>
        <WelcomeText />
      </Suspense>
      <Suspense fallback={<Skeleton count={10} />}>
        <ProductSlider />
      </Suspense>
      <Suspense fallback={<Skeleton count={24} />}>
        <CompanyProfile pageData={homeData} homeTitle={homeData.shortDescription} />
      </Suspense> */}
      {/* <Suspense fallback={<Skeleton count={21} />}>
        <FeaturesSect />
        <WhyChoose />
        <StepsSect />
        <ContactSect />
      </Suspense> */}
      <Footer />

    </>
  )
}

export default Home
