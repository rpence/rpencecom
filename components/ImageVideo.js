import React from 'react';
import { makeStyles } from '@material-ui/styles';
import LazyLoad from 'react-lazyload';


const useStyles = makeStyles((props) => {
    return {
        galleryBlock: {
            display: 'flex',
            maxWidth: '100%',
            maxHeight: 'calc(100vh - 30px)',

            '@media only screen and (max-width: 768px)': {
                flexBasis: '100%',
                width: '100%',
                //flexShrink: 0,
                flexDirection: 'column'
			},

            '& div': {
                padding: '10px',
                maxHeight: '100%',

                '& img': {
                    maxHeight: '100%',
                    margin: '0 auto'
                },

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
        videoContainer: {
            padding: '10px',
            maxHeight: '100%',


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
            maxHeight: '100%',
        }
    }
});

export default function ImageVideo(props) {
    const classes = useStyles();


    return (
        <>
            <div className={classes.galleryBlock}>
                {props.items.map((item) => {
                    return (
                        <>
                            <div>
                                <LazyLoad>
                                    <img src={item.image.url} />
                                </LazyLoad>
                            </div>
                            <div className={classes.videoContainer}>
                                <video
                                    muted
                                    autoPlay
                                    playsInline
                                    loop
                                    className={classes.video}
                                >
                                    <source src={item.video_url} type={item.video_url.split('.')[2] ? 'video/'+item.video_url.split('.')[2] : 'video/mp4'} />
                                </video>
                            </div>
                        </>
                        
                    )
                })}
            </div>
                
        </>
    )
}