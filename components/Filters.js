import React from 'react';
import { makeStyles } from '@material-ui/styles';

import CheckMark from './CheckMark';

const useStyles = makeStyles((props) => {
	return {
        filters: {
            margin: '30px 0',
            display: 'flex',  

            '& > div': {
                minWidth: '23%'
            }
        },
        strong: {
            display: 'block',
            marginTop: '60px',
        }
    }
})

export default function Filters(props) {

    const classes = useStyles();
    
    return (
        <>
            <strong className={classes.strong}>// Filters </strong>
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
                    <CheckMark label="Everything Else" />
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
                    <CheckMark label="Text Posts" />
                    <CheckMark label="Code" />
                </div>
            </div>
        </>
    )

}
