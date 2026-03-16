import React from 'react'
import LetterGlitch from './LetterGlitch'

const Secure = () => {
  return (
    <>
        <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
        />
        
    </>
  )
}

export default Secure