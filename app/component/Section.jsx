import React from 'react'
import RoxInfinateAnimation from './RoxInfinateAnimation'
import Shades from './Shades'
import MainHeading from './MainHeading'

const Section = () => {
    return (
        <>

            <RoxInfinateAnimation />
            <div className='bg-[#86378a]'>
                <div className="container h-screen relative mx-auto">

                    <div className="oneBox h-full  flex items-center relative z-[3]">
                        <div className="real-online-exp  h-auto">
                            <MainHeading imgSrc='assets/images/real.png' />
                            <span className="span-reveal" style={{ top: 20 }}>
                                <div className="online flex">
                                    <span className="span1">
                                        <img src="assets/images/online1.png" alt="char-1" className='h-auto max-w-full' />
                                    </span>
                                    <span className="span1">
                                        <img src="assets/images/online1.png" alt="char-1" className='h-auto max-w-full' />
                                    </span>
                                    <span className="span1">
                                        <img src="assets/images/online1.png" alt="char-1" className='h-auto max-w-full' />
                                    </span>
                                    <span className="span1">
                                        <img src="assets/images/online1.png" alt="char-1" className='h-auto max-w-full' />
                                    </span>
                                    <span className="span1">
                                        <img src="assets/images/online1.png" alt="char-1" className='h-auto max-w-full' />
                                    </span>
                                    {/* <span className="span1"><img src="assets/images/online2.png" alt="char-1" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }} /></span>
                                <span className="span1">
                                    <img src="assets/images/online3.png" alt="char-1" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }} /></span>
                                <span className="span1">
                                    <img src="assets/images/online4.png" alt="char-1" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }} />
                                </span>
                                <span className="span1">
                                    <img src="assets/images/online5.png" alt="char-1" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }} /></span>
                                <span className="span1">
                                    <img src="assets/images/online6.png" alt="char-1" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }} />
                                </span> */}
                                </div>
                            </span>

                            <MainHeading imgSrc='assets/images/experience.png' />
                        </div>

                    </div>
                    <div className="secondBox w-full absolute flex justify-end inset-0 h-full items-end z-[2]">
                        <div className="char-slide1 w-fit h-fit"><img src="assets/images/top-image-n.webp" alt="Character" className='h-auto max-w-full' /></div>
                    </div>

                    <Shades imgSrc='assets/images/gradiant.png' />

                </div>
            </div >

        </>
    )
}

export default Section