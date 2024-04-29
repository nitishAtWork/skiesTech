import React from 'react';
// import SectionTitle from '../SectionTitle';
import FeatureCard from '../FeatureCard';

const FeaturesSect = () => {
  return (
    <section className='feat-sect-bg '>
      <div className="svg-anm">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z">
        </path>
        <path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z">
        </path>
        <path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z">
        </path>
      </svg>
    </div>
      <div className='container'>
        <div className='row'>
            <FeatureCard addClass="card-one" featImg={process.env.REACT_APP_BASE_URL + "images/gif/feat-icon.gif"} featNumb="01" titleOne="A major factor that differentiates us from the rest is our staff and experts." featTitle="Experienced staff" featDesc="Our company is filled with all sorts of industry masters who know how to deal with their part in the project and land you massive results." />

            <FeatureCard addClass="card-two" featImg={process.env.REACT_APP_BASE_URL + "images/gif/feat-icon.gif"}  featNumb="02" titleOne="Unlike other companies, we are not limited to the number of services." featTitle="Variety of services" featDesc="We are a company that gives you a large chunk of services you can choose from. Whether you need a web designing service or google promotion we do it all." />

            <FeatureCard  addClass="card-three" featImg={process.env.REACT_APP_BASE_URL + "images/gif/feat-icon.gif"} featNumb="03" titleOne="We advise first seeing the testimonials of our clients and then opting for our services"  featTitle="Proven results" featDesc="We have always been a company that is more about outcomes rather than just extending the timelines. We are focused on saving as much time as possible with maximising the results." />

        </div>
      </div>
    </section>
  )
}

export default FeaturesSect
