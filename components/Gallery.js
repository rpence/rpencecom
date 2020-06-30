import React from 'react';
import { makeStyles } from '@material-ui/styles';
import LazyLoad from 'react-lazyload';


const useStyles = makeStyles((props) => {
    return {
        galleryBlock: {
            display: 'flex',
            maxWidth: '100%',

            '@media only screen and (max-width: 768px)': {
                flexBasis: '100%',
                width: '100%',
                flexShrink: 0,
                flexDirection: 'column'
			},

            '& div': {
                padding: '10px',

                '@media only screen and (max-width: 768px)': {
                    padding: '20px 0'
                },

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
                            <LazyLoad>
                                <img src={item.image.url} />
                            </LazyLoad>
                        </div>
                    )
                })}
            </div>
                
        </>
    )
}