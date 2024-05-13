import React from 'react'
import Nav from '../components/nav/Nav';
import BreadCrumb from '../components/sections/BreadCrumb'
import ContactSect from '../components/sections/ContactSect'
import CategoryProductSection from '../components/sections/CategoryProductSection';
// import HelmetComp from '../components/HelmetComp';
import Footer from '../components/sections/Footer';

const CategoryProducts = () => {
  return (
    <>
      <Nav />
      <BreadCrumb name="Products" />
      <CategoryProductSection />
      <ContactSect />
      <Footer />
    </>
  )
}

export default CategoryProducts
