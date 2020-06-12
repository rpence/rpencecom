import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { RichText } from 'prismic-reactjs'


const useStyles = makeStyles((props) => {
    return {
        galleryBlock: {
            display: 'flex',
            maxWidth: '100%',

            '& > div': {
                padding: '10px',
                flexBasis: 0,
                flexGrow: 1,
                maxWidth: '66%',

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

export default function TextBlock(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.galleryBlock}>
                {props.items.map((item) => {
                    return (
                        <div>
                            {RichText.render(item.text_block)}
                        </div>
                    )
                })}
                
            </div>     
        </>
    )
}