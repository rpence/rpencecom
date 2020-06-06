import React, { useState, useEffect, useCallback } from 'react';


function translateXCSS(numPx) {
    return `translateY(${numPx}px)`;
}

export default function Marquee(props) {
 
    
  
    // if(props.dir === "down") {
    //     if(count > 0) {
    //         setCount(count - .5)
    //     } else {
    //         setCount(ref.clientHeight / 2);
    //     }
    // } else {
    //     if(count <= ref.clientHeight / 2) {
    //         setCount(count + .5)
    //     } else {
    //         setCount(0)
    //     }
    // }
    // ref.style.transform = translateXCSS(-count);

    
    const Child = () => (
        <span>
            {props.children}
        </span>
    );

    return (
        <div className="container">
            <div className="row">
                <div className="cards-wrap">
                    <Child />
                    <Child />
                </div>
            </div>
        </div>
    )
}
