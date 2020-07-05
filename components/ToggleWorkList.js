import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import All from '../components/All'

import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'


const apiEndpoint = 'https://ronniepence.cdn.prismic.io/api/v2'
const accessToken = 'MC5YdFhpTGhBQUFCNEFKNlY4.Tu-_vQ3vv70wBlfvv71zPe-_ve-_ve-_ve-_ve-_ve-_ve-_vXfvv71s77-9LUdhQ0FDbB_vv73vv71t' 
const Client = Prismic.client(apiEndpoint, { accessToken })

const useStyles = makeStyles((props) => {
	return {
		menuContent: {
			position: 'fixed',
			left: 'calc(100% - 101px)',
			minHeight: '100%',
			overflow: 'scroll',
			width: '100vw',
			borderLeft: '1px solid #000',
			top: '0',
			backgroundColor: '#fff',
            paddingLeft: '30px',
			paddingBottom: '250px',

			'@media only screen and (max-width: 768px)': {
				position: 'static',
				top: 'auto',
				left: 'auto',
				height: 'auto',
				padding: '25px',
				paddingBottom: '50px',
				boxSizing: 'border-box',
				borderLeft: 0
			}
		},
		toggled: {
			left: '50px'
		},
		draggable: {
			position: 'fixed',
			top: '50%',
			left: 'calc(100% - 101px - 10px)',
			marginTop: 'calc(-42px/2)',
			background: '#fff',
			border: '1px solid #000',
			padding: '10px 5px',
			cursor: 'pointer',

			'@media only screen and (max-width: 768px)': {
				display: 'none'
			}
		},
		toggledDraggable: {
			left: '40px'
        },
        extraPadding: {
            height: '150px'
        }
	}
})

export default function ToggleWorkList(props) {

    const classes = useStyles();
    const [toggleState, setToggleState] = useState();

    const handleToggle = () => {
        setToggleState(!toggleState);
    }

    return (
        <div className={`${classes.menuContent} ${toggleState ? classes.toggled : null}`}>
            <div 
                className={`${classes.draggable} ${toggleState ? classes.toggledDraggable : null}`}
                onClick={(() => handleToggle())}
            >⇿</div>
            <All 
                data={props.data}
                hideFeatured />
            <div className={classes.extraPadding} />
        </div>
    )
}