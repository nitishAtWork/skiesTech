import React, { useState, useEffect } from 'react';
import ContactSect from '../components/sections/ContactSect';
import BreadCrumb from '../components/sections/BreadCrumb';
import CatSubdomainSec from '../components/sections/CatSubdomainSec';
import HelmetComp from '../components/HelmetComp';
import Nav from '../components/nav/Nav';
import { useParams } from 'react-router-dom';
import Footer from '../components/sections/Footer';

function CatSubdomain(props) {

    const param = useParams();

    const [subdomain, setSubdomain] = useState([]);
    

    useEffect(() => {
        getSubdomain();
        console.log(subdomain);
    }, [param]);
    
    
    const getSubdomain = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}catSubdomain/${props.categorySlug}/${props.pdCategorySlug}`);
        result = await result.json();
        if (result.status) {
            setSubdomain(result.subdomain);
            console.log(subdomain);
        }
    }

   console.log(props.pdCategorySlug);
    
    return (
        <>
            <HelmetComp metaData={subdomain} />
            <Nav data={subdomain} />
            <BreadCrumb name={subdomain.shortDescription} />
            <CatSubdomainSec data={subdomain} hTwoTitle={subdomain.shortDescription} />
            <ContactSect />
            <Footer />
        </>
    )
}

export default CatSubdomain