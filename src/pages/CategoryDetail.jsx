import React, { useEffect, useState } from 'react'
import Nav from '../components/nav/Nav';
import BreadCrumb from '../components/sections/BreadCrumb'
import CategoryDetailSect from '../components/sections/CategoryDetailSect'
import ProductSlider from '../components/sections/ProductSlider';
import ContactSect from '../components/sections/ContactSect'
import HelmetComp from '../components/HelmetComp';
import Footer from '../components/sections/Footer';
import { useParams } from 'react-router-dom';

const CategoryDetail = (props) => {

  const [categories, setCategories] = useState([]);
  const param = useParams();

  useEffect(() => {
    getCategories();
  }, [param]);

  const getCategories = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}categories/${props.slug}`);
    result = await result.json();
    if (result.status) {
        setCategories(result.data);
    }
  }

  return (
    <>
      <HelmetComp metaData={categories}></HelmetComp>
      <Nav />
      <BreadCrumb name={categories.name} />
      <CategoryDetailSect category={categories} hTwoTitle={categories.shortDescription}/>
      <ProductSlider />
      <ContactSect />
      <Footer />
    </>
  )
}

export default CategoryDetail
