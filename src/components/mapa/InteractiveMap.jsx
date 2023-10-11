import React, { useState } from "react";
import  SvgComponent  from './mapa';


const Interactive = ( {onClickShowOverlay_} ) => {

    return(
            <div >
            <SvgComponent onClickShowOverlay={onClickShowOverlay_} />
            </div>
    )
}
export default Interactive
