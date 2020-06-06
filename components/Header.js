import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Music from '../components/Music';

const useStyles = makeStyles((props) => {
    return {
		div1: { 
			gridArea: '1 / 1 / 2 / 6',
			borderBottom: '2px solid #000',
			textAlign: 'center',
			lineHeight: '39px',
			letterSpacing: '1px',
			fontWeight: '700'
		},
		div2: { 
			gridArea: '2 / 1 / 3 / 6', 
			borderBottom: '2px solid #000',
			padding: '0 24px',
			lineHeight: '39px',
			fontSize: '12px',
			display: 'flex',
			justifyContent: 'space-between'
        },
        iconContainer: {
            borderLeft: '2px solid #000',
            padding: '0 20px',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center'
        },
        icon: {
			width: '15px',
        },
        icons: {
            height: '100%',
            display: 'flex',
            justifyContent: 'center'
        },
        sun: {
            width: '30px',
        },
		textSize1: {
			fontSize: '.6rem'
		},
		textSize2: {
			fontSize: '.9rem'
		},
		textSize3: {
			fontSize: '1.2rem'
		}
    }
});


export default function Header(props) {

    const classes = useStyles();

    return (
        <>
            <div className={classes.div1}>RONNIE PENCE</div>
            <div className={classes.div2}>
                <Music />
                <div className={classes.icons}>
                    <div className={classes.iconContainer}>
                        <img src="/static/imgs/sun.svg" className={classes.sun} />
                    </div>
                    <div className={classes.iconContainer}>
                        <img src="/static/grid.svg" className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                        <span className={classes.textSize1}>A</span>
                        <span className={classes.textSize2}>A</span>
                        <span className={classes.textSize3}>A </span>
                    </div>
                </div>
            </div>
        </>
    )
}