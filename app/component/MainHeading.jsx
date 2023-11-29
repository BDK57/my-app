import React from 'react'

const MainHeading = ({ imgSrc }) => {
    return (
        <span className="span-reveal">
            <img className="real h-auto max-w-full" src={imgSrc} style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }} />
        </span>
    )
}

export default MainHeading