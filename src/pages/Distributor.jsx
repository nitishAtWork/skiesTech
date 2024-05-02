import React from 'react'
import Nav from '../components/nav/Nav';
import BreadCrumb from '../components/sections/BreadCrumb'
import DistributorSect from '../components/sections/DistributorSect';
import Footer from '../components/sections/Footer';

const Distributor = () => {
  return (
    <>
     <Nav />
            <BreadCrumb name="Become a partner" />
            <DistributorSect />
            <Footer />
    </>
  )
}

export default Distributor
