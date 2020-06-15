import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(() => {
    return {
        canvasContainer: {
            width: '100%',
            height: '100%',
            lineHeight: 0,
            position: 'relative'
        },
        canvas: {
            width: '100%',
            height: '100%'
        },
        text: {
            left: '50%',
            top: '50%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            textAlign: 'center',
            backgroundColor: '#fff',
            lineHeight: 2,
            textTransform: 'uppercase',
            fontSize: '.7rem',
            fontWeight: 'bold',
            letterSpacing: '.1rem'
        }
    }

})

export default function X(props) {

    const classes = useStyles();
    const canvas = useRef();
    const canvasContainer = useRef();
    

    useEffect(() => {
        const cc = canvasContainer.current;
        const c = canvas.current;
        const factor = 3;
        var ctx = c.getContext("2d");
        c.width = cc.clientWidth*factor;
        c.height = cc.clientHeight*factor;
        ctx.moveTo(0, 0);
        ctx.lineTo(cc.clientWidth*factor, cc.clientHeight*factor);
        ctx.moveTo(cc.clientWidth*factor, 0);
        ctx.lineTo(0, cc.clientHeight*factor);
        ctx.lineWidth = factor;
        ctx.stroke();
    },[])


    return (
        <> 
            <div className={classes.canvasContainer} ref={canvasContainer}>
                <canvas className={classes.canvas} ref={canvas} />
                {props.includeText && <div className={classes.text}>this space is intentionally left blank</div>}
            </div>
        </>
    );
};