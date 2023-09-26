import React from 'react'
import {styles} from '../Styles'
import photo from '../assets/profile_wb_2.png'
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div  className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#770017]' />
          <div className='w-1 sm:h-80 h-40 red-gradient' />
        </div>

        <div>

        <h1 className={`${styles.heroHeadText} text-white`}>
          Hey, I'm  <span className = "text-[#770017]">Daniel </span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Electronic Engineer <br className='sm:block hidden' />
            With emphasis in AI and Data Sience
          </p>
          </div>
        </div>
    </section>
  )
}

export default Hero