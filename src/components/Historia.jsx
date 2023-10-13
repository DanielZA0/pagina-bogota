import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import Interactive from './mapa/InteractiveMap';
import { staggerContainer } from "../utils/motion";

const Historia = ({ FuncInput }) => {

  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={"Historia"}>
          &nbsp;
        </span>


        <motion.div variants={textVariant()}>

          <h2 className={`${styles.sectionHeadText} text-center`}>
            Mapa
          </h2>
        </motion.div>
        <div className='justify-content-center'>
          <Interactive onClickShowOverlay_={FuncInput} />
        </div>

        {/* <div className={`${styles.sectionHeadText} mt-20 flex flex-col`}>

      </div> */}
      </motion.section>
    </>
  );
};

export default Historia
//export default SectionWrapper(Historia, "Historia");