import React from 'react';
import SectionTitle from '../SectionTitle';
import QuickHelpCard from '../QuickHelpCard';
import { Parser } from 'html-to-react';

function SubdomainSec(props) {
    return (
        <section className='sect-space'>
            <div className='container'>
                <div className=''>
                    <img className='w-100' src={process.env.REACT_APP_BASE_URL + "images/products/" + props.data.img} alt={props.data.shortDescription} title={props.data.shortDescription} />
                    <div className="row">
                        <div className="col-lg-8 col-md-8 mt-4">
                            <SectionTitle smTitle="Product Details" mainTitle={props.data.shortDescription} />
                            {Parser().parse(props.data.description)}
                            {Parser().parse(props.data.extraDescription)}
                        </div>
                        <div className="col-lg-4 col-md-4">
                         <QuickHelpCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubdomainSec