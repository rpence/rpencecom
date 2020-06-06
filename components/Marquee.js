 import React from 'react';
 import { useState } from 'react';
 import { useEffect } from 'react';
 import { useRef } from 'react';
 
const translateXCSS = numPx => {
    return `translateY(${numPx}px)`;
}
 
 const Marquee = (props) => {
     const ref = useRef();
     
     useEffect(() => {
        const marq = ref.current;
        let requestId, i = 0;

        if(props.dir === "down") {
            i = marq.clientHeight / 2
        }
        const render = () => {
            const height = marq.clientHeight;

            if(props.dir === "down") {
                if(i > 0) {
                    i -= .5;
                } else {
                    i = height / 2;
                }
            }
            else {
                if(i <= height / 2) {
                    i += .5;
                } else {
                    i = 0;
                }
            }
            marq.style.transform = translateXCSS(-i);
            requestId = requestAnimationFrame(render);
         };

         render();
        
         return () => {
            cancelAnimationFrame(requestId);
        };

     },[]);

    const Child = () => (
        <span>
            {props.children}
        </span>
    );
     
     return (
         <div ref={ref}>
             <Child />
             <Child />
         </div>
     );
 };
 
export default Marquee;