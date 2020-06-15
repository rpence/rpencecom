import React from 'react';
import { makeStyles } from '@material-ui/styles';

import CheckMark from './CheckMark';

const useStyles = makeStyles((props) => {
	return {
        filters: {
            margin: '50px 0',
            display: 'flex',  

            '& > div': {
                minWidth: '23%'
            }
        }
    }
})

export default function Filters(props) {

    const classes = useStyles();
    
    return (
        <div className={classes.filters}>
            <div>
                <CheckMark label="Digital" />
                <CheckMark label="Photography" />
                <CheckMark label="Objects" />
                <CheckMark label="Games" />
            </div>
            <div>
                <CheckMark label="Hardware" />
                <CheckMark label="Data Visualization" />
                <CheckMark label="Video" />
                <CheckMark label="Misc." />
            </div>
            <div>
                <CheckMark label="Metal Working" />
                <CheckMark label="Craft Builds" />
                <CheckMark label="Logos" />
                <CheckMark label="Machine Learning" />
            </div>
            <div>
                <CheckMark label="Web Development" />
                <CheckMark label="Data Objects" />
            </div>
        </div>
    )

}
