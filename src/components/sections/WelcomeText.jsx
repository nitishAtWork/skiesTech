import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const WelcomeText = () => {
  return (
    <div className='text-center bg-gry'>
       <span className='Welcome-Letter'>
            <TypeAnimation
            sequence={[
              'Instant Web Tech Pvt. Ltd',
              1000, 
              'Heartly Welcomes You',
              1000, 
              'Join With Us Today',
              1000,
              'To Build Your Brand',
              1000,
              'And Bring It On ',
              1000,
              "Google's First Page.",
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '6vw', display: 'inline-block' }}
            repeat={Infinity}
          />
            </span>
    </div>
  )
}

export default WelcomeText
