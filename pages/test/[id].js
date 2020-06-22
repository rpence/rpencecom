import React, { useState } from 'react';
import Layout from '../../components/Layout';
import ComponentRender from '../../components/ComponentRender'
import { makeStyles } from '@material-ui/styles';
import dynamic from 'next/dynamic'


const Franss99 = dynamic(() => 
	import('../../components/Franss99'),
	{ ssr: false }
)

const useStyles = makeStyles((props) => {
	return {
		big: {
			width: '900px',
			height: '600px'
		}
	}
})


export default function Index(props) {

	const classes = useStyles();
	
	const [toggleState, setToggleState] = useState();

	const handleToggle = () => {
		setToggleState(!toggleState);
	}
	
	function createMarkup(html) {
  		return {__html: html};
	}

	return (
		<Layout>
			<div className={classes.big}>
				<Franss99 />
			</div>
			
		</Layout>
	)
};

