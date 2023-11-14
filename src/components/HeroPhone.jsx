import React from 'react'
import {styles} from '../Styles'
import { motion } from "framer-motion";
import bakgroung_image from "../assets/Bogotaazul.png";
const HeroPhone = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
     <div  className={`absolute inset-0 top-[20%]  mx-auto  `}>
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

        <motion.div className = {`text-left ${styles.paddingX}`} 
        initial = {{opacity:0, y:-50}}   
        animate={{y:0, opacity:1}}
        transition = {{duration:1}}
        >
        <p className={`${styles.heroSubText} mt-2 `} style={{fontFamily:"bely"}}>
            <br className='sm:block hidden' />
            "Entre los Recuerdos Silenciados" es una cautivadora obra literaria que teje una narrativa íntima a través de los entresijos del tiempo y la memoria. La historia sigue a Olivia, una mujer que, tras el fallecimiento de su abuelo, descubre una caja polvorienta llena de fotografías amarillentas y cartas desgastadas en el ático de la vieja casa familiar.
          </p>
          </motion.div> 
        </div>
    </section>
  )
}

export default HeroPhone