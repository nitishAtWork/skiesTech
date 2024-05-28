import React from 'react';
import SectionTitle from '../SectionTitle';
import { Parser } from 'html-to-react';

function CatSubdomainSec(props) {

    return (
        <section className='sect-space'>
            <div className='container'>
                <div className="">
                    <div className="abt-floated">
                        <img className='w-100' src={process.env.REACT_APP_BASE_URL + "images/categories/" + props.data.img} alt={props.data.name} title={props.data.name} />
                    </div>
                    
                    <SectionTitle smTitle="Product Details" hTwoTitle={props.hTwoTitle} mainTitle={props.data.shortDescription} />
                    {Parser().parse(props.data.description)}
                    {Parser().parse(props.data.extraDescription)}
                </div>
            </div>

        </section>
    )
}

export default CatSubdomainSec