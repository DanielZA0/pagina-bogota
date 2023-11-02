import React from "react";
import { SectionWrapper } from "../hoc";

const MapaTitle = () => {
    return (
        <>        

            <h2 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ">
                Mapa
            </h2>

        </>
    )
}

export default SectionWrapper(MapaTitle, "MapaTitle");
