import React, { useState, useEffect, useRef } from 'react';

function translateXCSS(numPx) {
    return `translateY(${numPx}px)`;
}

export default function Marquee(props) {
    
    const marqueeContainer = useRef(null);

    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(props.dir === "down" ? marqueeContainer.current.clientHeight / 2 : 0);
    }, [])

    function countFunction() {
        typeof window !== 'undefined' && requestAnimationFrame(() => {
            if(props.dir === "down") {
                if(count > 0) {
                    setCount(count - .5)
                } else {
                    setCount(marqueeContainer.current.clientHeight / 2);
                }
            } else {
                if(count <= marqueeContainer.current.clientHeight / 2) {
                    setCount(count + .5)
                } else {
                    setCount(0)
                }
            }
            marqueeContainer.current.style.transform = translateXCSS(-count);
        });

    }
    countFunction();
    
    const Child = () => (
        <span>
            {props.children}
        </span>
    );

    return (
        <div className="container">
            <div className="row">
                <div className="cards-wrap" ref={marqueeContainer}>
                    <Child />
                    <Child />
                </div>
            </div>
        </div>
    )
}
