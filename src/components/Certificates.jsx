import React from "react";
import {Tilt} from 'react-tilt';
import { motion } from "framer-motion";
import { enlace } from "../assets";
import { styles } from "../styles";
import { certificates } from "../constants";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, source_code_link }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-stone-700 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='Electronic-Ing'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={enlace}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />

            </div>
          </div>
      </div>
    </motion.div>
  </Tilt>
);

const certificate = () => {
  return (
    <>
    <motion.div variants ={textVariant()}>
      <h2 className = {styles.sectionHeadText}>
        Certificates
      </h2>
    </motion.div>

    <motion.p 
    variants = {fadeIn("", "", 0.1, 1)} className = ' mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]'>
      These are some of the certificates I have obtained from various courses.
    </motion.p>
    
    <div className='mt-20 flex flex-wrap gap-10 justify-center'>
    {certificates.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

    </div>

    </>
  );
};

export default SectionWrapper(certificate, "certificates");