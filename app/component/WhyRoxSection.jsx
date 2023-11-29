import React from 'react'
import RoxInfinateAnimation from './RoxInfinateAnimation'
import Shades from './Shades'
import MainHeading from './MainHeading'

const WhyRoxSection = () => {
    return (
        <>

            <RoxInfinateAnimation />
            <div className='bg-[#79be7d]'>
                <div className="container h-screen relative mx-auto flex flex-row-reverse overflow-hidden">

                    <div classname="oneBox h-full  flex items-center relative z-[3]">
                        <span className="span-reveal">
                            <h2 style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}>Why Rox?</h2>
                        </span>
                        <MainHeading imgSrc='assets/images/rox-n.png' />
                        <MainHeading imgSrc='assets/images/roll.png' />

                        <div className="slide-2-txt-box">
                            <span className="span-reveal">
                                <p style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>ROX is a subscription-based digital lifestyle brand that
                                    lets you enjoy the best of both worlds. We’re the digital
                                    essentials toolkit you need to enjoy the real
                                    online experience</p>
                            </span>
                            <div className="qr-container">
                                <div className="span-reveal" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
                                    <h4 className="text-center">DOWNLOAD &amp; ROX NOW</h4>
                                </div>
                                <div className="qr-box">
                                    <span className="span-reveal" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
                                        <img src="assets/images/qr-code-new.png" alt="QR" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }} /></span>
                                </div>
                                {/* <span class="span-reveal">
                              <h3 class="text-center">OR</h3>

                          </span> */}
                                <div className="btn">
                                    <span className="span-reveal" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
                                        <img src="./assets/images/app-store.png" alt className="app-store" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }} />
                                    </span>
                                    <span className="span-reveal" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
                                        <img src="./assets/images/google-play.png" alt className="google-play" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="secondBox hidden w-full absolute  justify-start inset-0 h-full items-start z-[2]">
                        <div className="char-slide1 w-fit h-fit"><img src="assets/images/roll-n-rox-n.webp" alt="Character" className='h-auto max-w-full' /></div>
                    </div>

                    <Shades imgSrc='assets/images/gradiant-yellow.png' />

                </div>
            </div >

        </>
    )
}

export default WhyRoxSection