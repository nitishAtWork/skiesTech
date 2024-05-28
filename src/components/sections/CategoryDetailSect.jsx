import { React } from 'react';
import SectionTitle from '../SectionTitle';
import { Parser } from 'html-to-react'

const ProductDetailSect = (props) => {

    return (
        <section className='sect-space'>
            <div className='container'>
                <div className="">
                    <div className="abt-floated">
                       <img className='w-100' src={process.env.REACT_APP_BASE_URL + "images/categories/" + props.category.img} alt={props.category.name} title={props.category.name} />
                    </div>
                    <SectionTitle smTitle="Product Details" hTwoTitle={props.hTwoTitle} mainTitle={props.category.shortDescription} />
                    {Parser().parse(props.category.description)}
                    {Parser().parse(props.category.extraDescription)}
                </div>
            </div>

        </section>
    )
}

export default ProductDetailSect
