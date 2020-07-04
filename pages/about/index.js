import React, { useState } from 'react';
import Layout from '../../components/Layout';
import ComponentRender from '../../components/ComponentRender'
import { makeStyles } from '@material-ui/styles';
import Head from 'next/head'

import ToggleWorkList from '../../components/ToggleWorkList'

import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'



const useStyles = makeStyles((props) => {
	return {

		mainContent: {
			padding: '20px',
			paddingBottom: '100px',
			maxWidth: 'calc(100% - 100px - 50px)',

			'@media only screen and (max-width: 768px)': {
				maxWidth: 'none'
			}
		},
		mainContentInner: {
			display: 'flex'
		},
		contentLeft: {
			flexBasis: '380px',
			paddingRight: '20px'
		},
		title: {
			lineHeight: '1.6'
		},
		video: {
			width: '380px'
		}

	}
})

export default function Index(props) {

	const classes = useStyles();
	
	function createMarkup(html) {
  		return {__html: html};
	}

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>About | Ronnie Pence</title>
				<link rel="icon" type="image/png" href="/static/logo-dark.png"></link>
			</Head>
			<Layout>
				<div className={classes.mainContent}>
					<div className={classes.mainContentInner}>
						<div className={classes.contentLeft}>
							<video
								muted
								autoPlay
								playsInline
								loop
								className={classes.video}
							>
								<source src="http://spectroscapes.com/static/video/ronnie.mp4" type="video/mp4" />
							</video>
						</div>
						<div className={classes.contentRight}>
							<h1 className={classes.title}>I am Ronnie Pence, a New York based artist and creative technologist combining data, machine learning, and other technologies with thoughtful design to create multisensory experiences that drive compelling narratives through digital screens and beyond.</h1>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
};
