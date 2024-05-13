import React from 'react'
import Nav from '../components/nav/Nav';
import BreadCrumb from '../components/sections/BreadCrumb'
import ApplySect from '../components/sections/ApplySect';
import Footer from '../components/sections/Footer';

const Apply = () => {
    
    return (
        <>
            <Nav />
            <BreadCrumb name="Apply Now For Your Better Future" />
            <ApplySect />
            <Footer />
        </>
    )
}

export default Apply
