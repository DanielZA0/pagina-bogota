import React from 'react'
import {styles} from '../Styles'
import { motion } from "framer-motion";
import bakgroung_image from "../assets/Bogotaazul.png";
const Hero = () => {
  return (
    <section className={`relative lg:mt-10 sm:mt-[20%] w-full h-screen mx-auto`}>
     <div  className={`relative inset-0 max-w-7xl mx-auto`}>
        <motion.div
          initial = {{opacity:0, y:-50}}   
          animate={{opacity:1, y:0}}
          transition = {{duration:2}}>
            <img
            src={bakgroung_image}
            alt='fondo'
            className='w-full '


          />
        </motion.div>
          {/*bg-[length:110%_50%] bg-[top:0]*/} 
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