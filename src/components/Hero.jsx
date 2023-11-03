import React from 'react'
import {styles} from '../Styles'
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
     <div  className={`absolute inset-0 top-[30%]  max-w-7xl mx-auto ${styles.paddingX}   justify-center`}>
{/* 
        <motion.div className = 'text-center'
        initial = {{opacity:0, y:-50}}   
        animate={{y:0, opacity:1}}
        transition = {{duration:1}}
        >
        <h1 className={`${styles.heroHeadText}`}>
          Bogotá <br className='sm:block hidden' />
          en mil pedazos
        </h1>
        

        <p className={`${styles.heroSubText} mt-2 `} style={{fontFamily:"bely"}}>
            <br className='sm:block hidden' />
            Posible frase
          </p>
          </motion.div> */}
        </div>
    </section>
  )
}

export default Hero