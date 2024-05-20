import React, { useEffect, useState } from 'react';
import { Parser } from 'html-to-react'
import SectionTitle from '../SectionTitle';
import CategoriesCard from '../CategoriesCard';
import { TypeAnimation } from 'react-type-animation';
import BtnLink from '../BtnLink';

const CategoriesSect = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}/categories`);
    result = await result.json();
    if (result.status) {
        setCategories(result.data);
    }
};

  return (
    <section className='sect-space bg-gry'>
      <div className='container'>
        <div className='text-center m-b40'>
          <SectionTitle smTitle="Categories" mainTitle="All Available Product Categories" />
        </div>
        <div className='row '>
        {
            categories
              ?
              categories.map((value, index) =>
              <div key={index} className=' col-lg-3 col-md-4 col-sm-6 m-b30'>
              <CategoriesCard
                productName={value.name}
                servDesc={Parser().parse(value.description)}
                servPrice={value.price}
                servLink={'/' + value.slug}
                servImg={value.img}
                Href={'/' + value.slug}
              />
            </div>
              )
              :
              null
          }

        </div>
        <div className="text-center"><BtnLink Href="/product" btnName="View All Products"/></div>
      </div>
    </section>
  )
}

export default CategoriesSect
