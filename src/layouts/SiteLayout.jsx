import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PreLoader from '../components/sections/PreLoader';
import '../App.css';
const About = lazy(() => import('../pages/About'));
const Home = lazy(() => import('../pages/Home'));
const Contact = lazy(() => import('../pages/Contact'));
const Distributor = lazy(() => import('../pages/Distributor'));
const Career = lazy(() => import('../pages/Career'));
const Apply = lazy(() => import('../pages/Apply'));
const Sitemap = lazy(() => import('../pages/Sitemap'));
const MarketPlace = lazy(() => import('../pages/MarketPlace'));
const Products = lazy(() => import('../pages/Products'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const CategoryDetail = lazy(() => import('../pages/CategoryDetail'));
const ProductList = lazy(() => import('../components/sections/ProductList'));
const Subdomain = lazy(() => import('../pages/Subdomain'));
const OurPresenceInCity = lazy(() => import('../pages/OurPresenceInCity'));
const KeywordInCity = lazy(() => import('../pages/KeywordInCity'));

function SiteLayout() {

  const [products, setProduct] = useState([]);
  const [locations, setLocations] = useState([]);
  const [promotionalCategories, setPromotionalCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}products`);
    result = await result.json();
    if (result.status) {
      setProduct(result.products);
    }
  }

  const getCategories = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}categories`);
    result = await result.json();
    if (result.status) {
        setCategories(result.data);
    }
  }

  const getMarketPlace = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}marketPlace`);
    result = await result.json();
    if (result.status) {
      setLocations(result.data.locations);
      setPromotionalCategories(result.data.promotionalCategories);
    }
  }

  useEffect(() => {
    getProducts();
    getMarketPlace();
    getCategories();
  }, [])

  return (
    <>
      {/* <Nav></Nav> */}
      <Routes>
        <Route path='/' element={<Suspense fallback={<PreLoader />}><Home /></Suspense>} />
        <Route path='/product' element={<Suspense fallback={<PreLoader />}><Products /></Suspense>} />
        <Route path='/company-profile' element={<Suspense fallback={<PreLoader />}><About /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<PreLoader />}><Contact /></Suspense>} />
        <Route path='/partner' element={<Suspense fallback={<PreLoader />}><Distributor /></Suspense>} />
        <Route path='/career' element={<Suspense fallback={<PreLoader />}><Career /></Suspense>} />
        <Route path='/apply' element={<Suspense fallback={<PreLoader />}><Apply /></Suspense>} />
        <Route path='/sitemap' element={<Suspense fallback={<PreLoader />}><Sitemap /></Suspense>} />
        <Route path='/market-place' element={<Suspense fallback={<PreLoader />}><MarketPlace /></Suspense>} />
        {
          products
            ?
            products.map((value, index) =>
              <Route key={index} path={'/' + value.slug} element={<Suspense fallback={<PreLoader />}><ProductDetail slug={value.slug} /></Suspense>} />
            )
            :
            null
        }
        {
          categories
            ?
            categories.map((value, index) =>
              <Route key={index} path={'/' + value.slug} element={<Suspense fallback={<PreLoader />}><CategoryDetail slug={value.slug} /></Suspense>} />
            )
            :
            null
        }
        {
          promotionalCategories
            ?
            promotionalCategories.map((value, index) =>
              <>
                <Route
                  key={index}
                  path={'/' + value.slug}
                  element={<Suspense fallback={<PreLoader />}><ProductList slug={value.slug} /></Suspense>}
                />
                {
                  products
                    ?
                    products.map((item, key) =>
                      <Route
                        key={key}
                        path={'/' + value.slug + "/" + item.slug}
                        element={<Suspense fallback={<PreLoader />}><Subdomain categorySlug={value.slug} productSlug={item.slug} /></Suspense>}
                      />
                    )
                    :
                    null
                }
              </>
            )
            :
            null
        }
        {
          locations
            ?
            locations.map((value, index) =>
              <>
                <Route key={index} path={'/' + value.parentSlug} element={<Suspense fallback={<PreLoader />}><OurPresenceInCity slug={value.parentSlug} /></Suspense>} />
                {
                  products
                    ?
                    products.map((item, key) =>
                      <Route
                        key={key}
                        path={'/' + value.parentSlug + '/' + item.slug}
                        element={
                          <Suspense fallback={<PreLoader />}>
                            <KeywordInCity
                              locationSlug={value.parentSlug}
                              productSlug={item.slug}
                            />
                          </Suspense>
                        }
                      />
                    )
                    :
                    null
                }
                {
                  value.cities.map((item, key) =>
                    <>
                      <Route key={key} path={'/' + item.slug} element={
                        <Suspense fallback={<PreLoader />}>
                          <OurPresenceInCity slug={item.slug} />
                        </Suspense>
                      } />
                      {
                        products
                          ?
                          products.map((val, i) =>
                            <Route
                              key={i}
                              path={'/' + item.slug + '/' + val.slug}
                              element={
                                <Suspense fallback={<PreLoader />}>
                                  <KeywordInCity
                                    locationSlug={item.slug}
                                    productSlug={val.slug}
                                  />
                                </Suspense>
                              }
                            />
                          )
                          :
                          null
                      }
                    </>
                  )
                }
              </>
            )
            :
            null
        }
      </Routes>
    </>
  )
}

export default SiteLayout