 import React from 'react';
 import { useEffect } from 'react';
 import { useRef } from 'react';
 import { makeStyles } from '@material-ui/styles';

const translateYCSS = numPx => {
    return `translateY(${numPx}px)`;
}
const translateXCSS = numPx => {
    return `translateX(${numPx}px)`;
}
const useStyles = makeStyles((props) => {
    return {
        marqueeContainer: {
            whiteSpace: 'nowrap',
            position: 'fixed',
            bottom: 0,
            left: 0,
            minWidth: '100%',
            backgroundColor: '#1122ff',
            color: '#0ff53d',
            zIndex: 3,

            '& span': {
                whiteSpace: 'nowrap',
            }
        },
        minWidth: {
            display: 'inline-block',
            minWidth: '150vw'
        }
    }
});
 
const Marquee = (props) => {
    const ref = useRef();
    const classes = useStyles();
     
    useEffect(() => {

        
        const marq = ref.current;
        let requestId, i = 0;
        const speed = .76;

        if(props.dir === "down") {
            i = marq.clientHeight / 2
        }

        const render = () => {
            const height = marq.clientHeight;
            const width = marq.clientWidth;

            if(props.dir === "down") {
                if(i > 0) {
                    i -= speed;
                } else {
                    i = height / 2;
                }
            }
            else if(props.dir === "ltr") {
                if(i <= width / 2) {
                    i += speed;
                } else {
                    i = 0;
                }
            }
            else {
                if(i <= height / 2) {
                    i += speed;
                } else {
                    i = 0;
                }
            }
            if(props.dir === "ltr") {
                marq.style.transform = translateXCSS(-i);
            } else {
                marq.style.transform = translateYCSS(-i);
            }
            requestId = requestAnimationFrame(render);
         };

        render();
        
        return () => {
            cancelAnimationFrame(requestId);
        };

    },[]);

    const Child = () => (
        <span className={classes.minWidth}>
            {props.children}
        </span>
    );
     
    return (
        <div ref={ref} className={classes.marqueeContainer}>
            <Child />
            <Child />
        </div>
    );
 };
 
export default Marquee;