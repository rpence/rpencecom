import React, { useState, useEffect, useRef } from 'react';
import X from './X';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(() => {
    return {
        checkmarkContainer: {
            display: 'flex',
            alignContent: 'center',
            flexDirection: 'row',
            marginBottom: '20px',
            lineHeight: '15px',
            fontSize: '.7rem',
            textTransform: 'uppercase',
            cursor: 'pointer'
        },
        checkmark: {
            width: '13px',
            height: '13px',
            border: '1px solid #000',
            marginRight: '10px',
            lineHeight: 0
        },
        disabled: {
            opacity: '.25',
            cursor: 'not-allowed'
        }
    }

})

export default function CheckMark(props) {

    const classes = useStyles();

    const [toggle, setToggle] = useState(false)
    

    const handleToggle = (uid) => {
        if(!props.disabled) {
            props.filterToggle(uid)
            setToggle(!toggle)
        }
    }


    return (
        <>
            <div 
                className={`${classes.checkmarkContainer} ${props.disabled ? classes.disabled : null}`}
                onClick={(() => handleToggle(props.uid))}>
                <div className={classes.checkmark}>
                    {toggle && <X />}
                </div> 
                {props.label}
            </div>
        </>
    );
};