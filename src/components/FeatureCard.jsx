import React, { useEffect } from 'react';
import './FeatureCard.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureCard = (props) => {

  const boxVariant = {
    visible: { opacity: 1, scale: 1, translateX: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0.25, scale: 0.65, translateX: 180 },
  }

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className='col-lg-4 col-md-6 mt-2'>
      <div className={props.addClass + ' ' + 'feat-card'}>
        <div className='feat-card-content'>
          <div className='Numb'>{props.featNumb}</div>
          <div className='icn-and-text'>
            <div className='brdr-shd-one'>
              <div className='brdr-shd-two'>
                <div className='Icn'><img src={props.featImg} alt="" /></div>
                <p className='Text'>{props.titleOne}</p>
              </div>
            </div>
          </div>
          <div className='bg-shade-one'></div>
          <div className='bg-shade-two'>
            <p className='title'>{props.featTitle}</p>
            <p className='feat-desc'>{props.featDesc}</p>
          </div>
          {/*  */}
          {/* <a className='arrow-feat' href=""><i className="fa-solid fa-arrow-right-long"></i></a> */}
        </div>
      </div>
    </motion.div>
  )
}

export default FeatureCard
