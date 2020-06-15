import React, { useEffect, useRef } from 'react';
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
            textTransform: 'uppercase'
        },
        checkmark: {
            width: '13px',
            height: '13px',
            border: '1px solid #000',
            marginRight: '10px',
            lineHeight: 0
        }
    }

})

export default function CheckMark(props) {

    const classes = useStyles();
    

    useEffect(() => {
  
    },[])


    return (
        <> 
            <div className={classes.checkmarkContainer}>
                <div className={classes.checkmark}>
                    <X />
                </div> 
                {props.label}
            </div>
        </>
    );
};