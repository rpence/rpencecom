import React from 'react';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((props) => {
    return {
        galleryBlock: {
            display: 'flex',
            maxWidth: '100%',

            '& div': {
                padding: '10px',
                '&:first-of-type': {
                    paddingLeft: 0
                },
                '&:last-of-type': {
                    paddingRight: 0
                }
            }
        }
    }
});

export default function Gallery(props) {
    const classes = useStyles();


    return (
        <>
            <div className={classes.galleryBlock}>
                {props.items.map((item) => {
                    return (
                        <div>
                            <img src={item.image.url} />
                        </div>
                    )
                })}
            </div>
                
        </>
    )
}