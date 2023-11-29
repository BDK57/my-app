import React from 'react'

const Shades = ({ imgSrc }) => {
    return (
        <div className="shades absolute inset-0 h-full w-full flex items-end z-[1]">
            <img src={imgSrc} className='h-screen max-w-full' alt="shades" />
        </div>
    )
}

export default Shades