import React from 'react';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((props) => {
    return {
        galleryBlock: {
            display: 'flex',
            maxWidth: '100%',
            position: 'relative',
            maxHeight: 'calc(100vh - 30px)',

            '@media only screen and (max-width: 768px)': {
                flexBasis: '100%',
                width: '100%',
                flexShrink: 0,
                flexDirection: 'column'
			},
        },
        videoContainer: {
            padding: '10px',

            '@media only screen and (max-width: 768px)': {
                padding: '10px 0'
            },

            '&:first-of-type': {
                paddingLeft: 0
            },
            '&:last-of-type': {
                paddingRight: 0
            },
        },
        video: {
            maxWidth: '100%',
            maxHeight: '100%'
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
                        <div className={classes.videoContainer}>
                            <video
                                muted
                                autoPlay
                                playsInline
                                loop
                                className={classes.video}
                            >
                                <source src={item.video_url} type="video/mp4" />
                            </video>
                        </div>
                    )
                })}
            </div>
                
        </>
    )
}