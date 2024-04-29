import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StepsRight = (props) => {

    const boxVariant = {
        visible: { opacity: 1, scale: 1, translateX: 0, transition: { duration: 0.35 } },
        hidden: { opacity: 0.95, scale: 1, translateX: "50%" },
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
        <div className="row sm-justify-content-center my-2">
            <div className="col-lg-5 col-md-6 col-10 ">
            </div>
            <div className="col-md-2 d-lg-inline d-none work-box d-none-phn-work">
                <div className="process-point-left"></div>
            </div>
            <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
                className="col-lg-5 col-md-6 col-10 work-box">
                <div className="process-box process-right wow slideInRight" >
                    <div className="row">
                        <div className="col-4 d-flex align-items-center">
                            <div className="process-step">
                                <span className="m-0 p-0 h2-tx">{props.stepNo}</span>
                                <p className="m-0 p-0">Step</p>
                            </div>
                        </div>
                        <div className="col-8 p-0 pright">
                        <img height={50} width={50} className='step-img' src={process.env.REACT_APP_BASE_URL + "images/gif/Award1.gif"} alt="Award Gif" />
                            <p className="p-name">{props.stepTitle}</p>
                            <p><small>{props.stepDesc}</small></p>
                        </div>
                    </div>

                </div>
            </motion.div>

        </div>
    )
}

export default StepsRight
