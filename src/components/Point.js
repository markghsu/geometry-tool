import React, { useState } from "react";
import PropTypes from "prop-types";

function Point ( {x, y} ) {
    let style = {
        top: y,
        left: x
    }
    return (
        <div className="point" style={style}></div>
    )
}

export default Point;