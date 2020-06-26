import React from 'react';
import { makeStyles } from '@material-ui/styles';

import CheckMark from './CheckMark';

const useStyles = makeStyles((props) => {
	return {
        filters: {
            margin: '30px 0',
            display: 'flex', 

            '@media only screen and (max-width: 600px)': {
                flexDirection: 'column'
            },

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

export default function Filters({filterToggle}) {

    const classes = useStyles();

    
    return (
        <>
            <strong className={classes.strong}>// Filters </strong>
            <div className={classes.filters}>
                <div>    
                    <CheckMark
                        filterToggle={filterToggle}	
                        label="Digital"
                        uid="digital" />
                    <CheckMark 
                        filterToggle={filterToggle}
                        label="Photography"
                        uid="photography" />
                    <CheckMark
                        filterToggle={filterToggle}
                        label="Objects"
                        uid="objects" />
                    <CheckMark
                        filterToggle={filterToggle}
                        label="Games"
                        uid="games" />
                </div>
                <div>
                    <CheckMark 
                        filterToggle={filterToggle}
                        label="Hardware"
                        uid="hardware"/>
                    <CheckMark label="Data Visualization" 
                        label="Data Visualization" 
                        filterToggle={filterToggle}
                        uid="data-visualization"/>
                    <CheckMark 
                        label="Video"
                        filterToggle={filterToggle}
                        uid="video" />
                    <CheckMark 
                        label="Everything Else"
                        filterToggle={filterToggle}
                        uid="everything-else" />
                </div>
                <div>
                    <CheckMark 
                        label="Metal Working"
                        filterToggle={filterToggle}
                        uid="metal-working" />
                    <CheckMark 
                        label="Craft Builds"
                        filterToggle={filterToggle}
                        uid="craft-builds" />
                    <CheckMark 
                        label="Logos"
                        filterToggle={filterToggle}
                        uid="logos" />
                    <CheckMark 
                        label="Machine Learning"
                        filterToggle={filterToggle}
                        uid="machine-learning" />
                </div>
                <div>
                    <CheckMark 
                        label="Web Development"
                        filterToggle={filterToggle}
                        uid="web-development" />
                    <CheckMark 
                        label="Data Objects"
                        filterToggle={filterToggle}
                        uid="data-objects" />
                    <CheckMark 
                        label="Text Posts"
                        filterToggle={filterToggle}
                        uid="text-posts" />
                    <CheckMark 
                        label="Code"
                        filterToggle={filterToggle}
                        uid="code" />
                </div>
            </div>
        </>
    )

}
