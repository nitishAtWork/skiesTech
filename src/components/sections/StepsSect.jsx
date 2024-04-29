import React from 'react'
import './StepsSect.css'
import StepsLeft from '../StepsLeft'
import StepsRight from '../StepsRight'

const StepsSect = () => {
  return (
    <section className='sect-space bg-gry overflow-hidden'>
      <div className="container work-process  pb-3 pt-3">
        {/* <div className="row">
          <div className="col-lg-12 col-md-11 pdb-30 pdt-30">
            <div className="section-title-header text-center">
              <p className="section-title2 mb0">How We Work</p>
            </div>
          </div>
        </div> */}

         <StepsLeft stepTitle="Ideal Support" stepDesc="From start to end we’ll take care of everything without making it a hassle for you. This way you can even feel more involved in the process rather than just staying at the perimeter." stepNo="01"/>

         <StepsRight stepTitle="Perfect Planning " stepDesc="We first plan out everything and then span or execute it accordingly. Without any complications. We have strategists who help us to document all the steps beforehand. " stepNo="02"/>

        <StepsLeft stepTitle="Industry Expertise" stepDesc="We have years of experience that you are riding on when working with a reputed company like ours. This expertise makes us immune to challenges that arise in your brand promotion" stepNo="03"/>

        
        <StepsRight stepTitle="Massive success rate" stepDesc="We are always on a constant run to maximise our success rate in every way possible so that there are more chances of successful project completion along with genuine results." stepNo="04"/>

        <StepsLeft addClass="process-last" stepTitle="Quick turnaround time" stepDesc="Want a turnaround or change in your project? No worries we are here to deal with it all. We have the best team in line thatt will assist you with all the edits that you need." stepNo="05"/>
      </div>
    </section>
  )
}

export default StepsSect
