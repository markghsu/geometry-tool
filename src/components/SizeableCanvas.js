import React, { useState } from "react";
import PropTypes from "prop-types";
import Canvas from "./Canvas";

function SizeableCanvas ( props ) {
    const [width, setWidth] = useState(300);
    const [height, setHeight] = useState(300);

    function changeProp(f,value) {
        if(!isNaN(parseInt(value))){
            f(parseInt(value));
        }
    }
    return (
        <div>
            <div>
            Width: <input type="number" value={width} onChange={(evt) => changeProp(setWidth, evt.target.value)} />
            Height: <input type="number" value={height}  onChange={(evt) => changeProp(setHeight, evt.target.value)}/>
            </div>
            <Canvas width={width} height={height} />
        </div>
    )
}

export default SizeableCanvas;