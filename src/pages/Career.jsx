import React, { useEffect, useState } from 'react';
import Nav from '../components/nav/Nav';
import BreadCrumb from '../components/sections/BreadCrumb';
import ApplySect from '../components/sections/ApplySect';
import HelmetComp from '../components/HelmetComp';
import Footer from '../components/sections/Footer';
import CareerSect from '../components/sections/CareerSect';

const Career = () => {
    return (
        <>
            {/* <HelmetComp metaData={aboutData} /> */}
            <Nav />
            <BreadCrumb name="Career Page" />
            <CareerSect />
            <ApplySect />
            <Footer />
        </>
    )
}

export default Career
