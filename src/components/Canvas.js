import React, { useState } from "react";
import PropTypes from "prop-types";
import Point from "./Point";


function Canvas( {width, height} ) {
    const [points,setPoints] = useState([]);

    const style = {
        width,
        height
    }

    function makePoint (evt) {
        console.log(evt)
        //https://stackoverflow.com/questions/31519758/reacts-mouseevent-doesnt-have-offsetx-offsety
        setPoints((old) => [...old, {x: evt.nativeEvent.offsetX, y: evt.nativeEvent.offsetY}]);
    }
    return <div className="canvas" style={style} onMouseUp={makePoint}>
        {
            points.map(({x,y}) => <Point x={x} y={y} />)
        }
    </div>
}

Canvas.defaultProps = {
    width: 300,
    height: 300
  };

Canvas.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

export default Canvas;