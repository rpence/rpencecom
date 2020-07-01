import React from 'react';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((props) => {
    return {
        galleryBlock: {
            display: 'flex',
            maxWidth: '100%',
            position: 'relative',

            '@media only screen and (max-width: 768px)': {
                flexDirection: 'column',
                flexGrow: 1,
                flexShrink: 0,
                width: '100%',
                flexBasis: '100%'
            },

            '& div': {
                padding: '10px',
                width: '100%',
                '@media only screen and (max-width: 768px)': {
                    width: '100%',
                    flexShrink: 0,
                    padding: 0
                },
                '& iframe': {
                    width: '100%',
                    height: '100%',
                    paddingBottom: 'calc(100% - 150px)',
                    
                    '@media only screen and (max-width: 768px)': {
                        width: 'calc(100vw - 40px)',
                        height: 'calc(100vw - 40px)',
                        paddingBottom: 0,
                        flexShrink: 0,
                        marginBottom: '20px',

                        '&:last-of-type': {
                            marginBottom: '15px'
                        }
                    },
                    
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

export default function VideoGallery(props) {
    const classes = useStyles();

    function createMarkup(html) {
        return {__html: html};
    }

    return (
        <>
            <div className={classes.galleryBlock}>
                {props.items.map((item) => {
                    return (
                        <>
                            <div dangerouslySetInnerHTML={createMarkup(`${item.video.html}`)} />
                        </>
                    )
                })}
            </div>
                
        </>
    )
}