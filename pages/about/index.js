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
			display: 'flex',
			'@media only screen and (max-width: 768px)': {
				flexDirection: 'column'
			}
		},
		contentLeft: {
			flexBasis: '380px',
			paddingRight: '20px',

			'@media only screen and (max-width: 768px)': {
				flexBasis: '100%',
				paddingRight: '0',
				order: 2,
				marginTop: '40px'
			}

		},
		title: {
			lineHeight: '1.6',
			letterSpacing: '1px',

			'@media only screen and (max-width: 768px)': {
				fontSize: '1.1rem'
			}
		},
		video: {
			width: '380px',
			'@media only screen and (max-width: 768px)': {
				width: '100%',
			}
		},
		spacer: {
			margin: '50px 0'
		},
		strong: {
            marginBottom: '20px',
            display: 'block'
        },
		contact: {
			borderTop: '3px solid #000',

			'& ul': {
				listStyleType: 'none',
				margin: 0,
				padding: 0,
			},

			'& li': {
				display: 'inline-block',
				padding: '25px 0',
				width: '50%',
				borderBottom: '1px solid #000',
				'&:first-of-type': {
					width: '100%'
				}
			}
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
								<source src="https://media.ronniepence.com/ronnie.mp4" type="video/mp4" />
							</video>
						</div>
						<div className={classes.contentRight}>
							<h1 className={classes.title}>I am Ronnie Pence— <br />a New York based artist and creative technologist combining data, machine learning, and other technologies with thoughtful design to create multisensory experiences that drive compelling narratives through digital screens and beyond.</h1>
							<div className={classes.spacer}></div>
							<p>This website serves as a central repository for all of my creative and technological endeavors, including data visualizations and objects, web design and development, travel photography, and creative explorations in machine learning, among my other ventures in making and doing.</p>							
							<div className={classes.spacer}></div>
							<p>Interested in making something together? Get in touch!</p>
							<div className={classes.spacer}></div>
							<strong className={classes.strong}>// Contact </strong>
							<a name="contact"></a>
							<div className={classes.contact}>
								<ul>
									<li><a href="mailto:hello@ronniepence.com">hello[at]ronniepence.com</a></li>
									<li><a href="https://twitter.com/ronniepence" target="_blank">Twitter</a></li>
									<li><a href="https://www.instagram.com/ronnielpence/" target="_blank">Instagram</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
};
