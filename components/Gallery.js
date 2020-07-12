import React from 'react';
import { makeStyles, StylesContext } from '@material-ui/styles';
import LazyLoad from 'react-lazyload';


const useStyles = makeStyles((props) => {
    return {
        galleryBlock: {
            display: 'flex',
            maxWidth: '100%',
            textAlign: 'center',

            '@media only screen and (max-width: 768px)': {
                flexBasis: '100%',
                width: '100%',
                flexShrink: 0,
                flexDirection: 'column'
			},

            '& div': {
                padding: '10px',
                margin: '0 auto',

                '@media only screen and (max-width: 768px)': {
                    padding: '10px 0'
                },

                '&:first-of-type': {
                    paddingLeft: 0
                },
                '&:last-of-type': {
                    paddingRight: 0
                }
            }
        },
        max: {
            maxWidth: '2000px',
            margin: '0 auto',
            maxHeight: 'calc(100vh - 50px)',

            '@media only screen and (max-width: 768px)': {
                maxHeight: '100%',
                maxWidth: '100%'
            },
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
                                <img className={props.slice_label ? classes.max : null} src={item.image.url} />
                            </LazyLoad>
                        </div>
                    )
                })}
            </div>
                
        </>
    )
}