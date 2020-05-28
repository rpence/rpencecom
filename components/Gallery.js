import React from 'react';
import { makeStyles, ServerStyleSheets } from '@material-ui/styles';
import { StylesContext } from '@material-ui/styles/StylesProvider';
import LazyLoad from 'react-lazyload';


const useStyles = makeStyles(() => {
    return {
        grid: {
            display: 'grid',
            gridGap: '20px',
            gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) )'
        }
    }
});

export default function Gallery(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.grid}>
                {props.data.gallery.map((image, index) => {
                    return (
                        <div>
                            <LazyLoad height={200} offset={-100}>
                                <img src={`http://ronnie.mydroogs.com${image.path}`} alt="" />
                            </LazyLoad>
                        </div>
                    )
                })}
            </div>
        </>
    );
};