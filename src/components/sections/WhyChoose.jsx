import React from 'react';
import './WhyChoose.css'
import CountUp from 'react-countup';
import SectionTitle from '../SectionTitle';
// import LoremIpsum from 'react-lorem-ipsum';

const WhyChoose = () => {

  return (
    <section className="sect-space why-sect">
      <div className="shape-right"><img className='w-100' src={"images/img/man-img.png"} alt="" /></div>
      <div className="rr-counter-circle-bottom  "></div>
      <div className="rr-counter-circle-right "></div>
      <div className='container'>

        <div className='row'>
          <div className='col-lg-6'>
            <SectionTitle smTitle="Skies Tech Products Pvt. Ltd." mainTitle="Global Compliance" />
            {/* <LoremIpsum p={1} /> */}
            <p>Our products adhere to international quality and safety standards, making them suitable for use worldwide. Skies Tech Products is recognized for its compliance with global healthcare regulations.</p>
            <div className="counter-circle p-relative">
              <div className="row">
                <div className="col-lg-6">
                  <div class="funfact-content funfact-white-bg text-center fix p-relative mb-10">
                    <div class="funfact_shap">
                      <img src="images/icon/footer-shap.png" alt="img" />
                    </div>
                    <div class="funfact-icon">
                      <img src="images/icon/icon1.png" alt="img" />
                    </div>
                    <div class="funfact-number d-flex align-items-center justify-content-center">
                      <div className='count-text'>
                        <CountUp end={500} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                      </div>
                    </div>
                    <div class="funfact-text">
                      <span>Happy Clients</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div class="funfact-content funfact-content-2 funfact-white-bg text-center fix p-relative mb-10">
                    <div class="funfact_shap">
                      <img src="images/icon/footer-shap.png" alt="img" />
                    </div>
                    <div class="funfact-icon">
                      <img src="images/icon/icon2.png" alt="img" />
                    </div>
                    <div class="funfact-number d-flex align-items-center justify-content-center">
                      <div className='count-text'>
                        <CountUp end={500} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                      </div>
                    </div>
                    <div class="funfact-text">
                      <span>Happy Clients</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div class="funfact-content funfact-content-2 funfact-white-bg text-center fix p-relative mb-10">
                    <div class="funfact_shap">
                      <img src="images/icon/footer-shap.png" alt="img" />
                    </div>
                    <div class="funfact-icon">
                      <img src="images/icon/icon3.png" alt="img" />
                    </div>
                    <div class="funfact-number d-flex align-items-center justify-content-center">
                      <div className='count-text'>
                        <CountUp end={500} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                      </div>
                    </div>
                    <div class="funfact-text">
                      <span>Happy Clients</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div class="funfact-content funfact-white-bg text-center fix p-relative mb-10">
                    <div class="funfact_shap">
                      <img src="images/icon/footer-shap.png" alt="img" />
                    </div>
                    <div class="funfact-icon">
                      <img src="images/icon/icon4.png" alt="img" />
                    </div>
                    <div class="funfact-number d-flex align-items-center justify-content-center">
                      <div className='count-text'>
                        <CountUp end={500} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                      </div>
                    </div>
                    <div class="funfact-text">
                      <span>Happy Clients</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 m-t30'>

            <div className='why-img'>
              <img className='cert-img' src={"images/img/certificate.png"} alt="" />
            </div>
            {/* <div className='row align-items-center m-t40'>
              <div className='col-auto'><BtnLink Href="/contact" btnName="Contact Now" /></div>
            </div> */}
          </div>
        </div>
      
      </div>
    </section>
  )
}

export default WhyChoose
