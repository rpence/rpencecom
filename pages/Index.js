import React, { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic'
import { makeStyles } from '@material-ui/styles';
import Layout from '../components/Layout';
import Link from 'next/link'
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Marquee from '../components/Marquee';
import X from '../components/X';

import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

import Music from '../components/Music'


const apiEndpoint = 'https://ronniepence.cdn.prismic.io/api/v2'
const accessToken = 'MC5YdFhpTGhBQUFCNEFKNlY4.Tu-_vQ3vv70wBlfvv71zPe-_ve-_ve-_ve-_ve-_ve-_ve-_vXfvv71s77-9LUdhQ0FDbB_vv73vv71t' 
const Client = Prismic.client(apiEndpoint, { accessToken })

const Logo = dynamic(() => 
	import('../components/Logo'),
	{ ssr: false }
)

const useStyles = makeStyles((props) => {
	return {
		blockContainer: {
			marginBottom: '50px'
		},
		block: {
			padding: '10px 0 20px'
		},
		blockContainerLink: {
			borderBottom: '1px solid #000',
			color: '#000',

			'& a': {
				textDecoration: 'none',
				color: '#000',
			}
		},
		small: {
			fontSize: '.8rem'
		},
		header: {
			display: 'flex',
			height: '150px',
			borderBottom: '1px solid #000'
		},
		logo: {
			flexShrink: 0,
			flexBasis: '400px'
		},
		x: {
			flexGrow: 0,
			flexBasis: '100px',
			flexShrink: 0,
			maxWidth: '100px'
		},
		desc: {
			fontSize: '.8rem',
			padding: '20px'
		},
		descContainer: {
			flexGrow: 1,
			flexBasis: 'calc(100% - 300px -300px - 100px)'
		},
		nav: {
			flexShrink: 0,
			flexBasis: '300px',
			borderRight: '1px solid #000',
			borderLeft: '1px solid #000',

			'& ul': {
				listStyle: 'none',
				padding: 0,
				margin: 0,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-evenly',
				height: '100%',

				'& li': {
					borderBottom: '1px solid #000',
					height: '33.3%',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',

					'& a': {
						color: '#000',
						padding: '20px',
						textDecoration: 'none'
					},

					'&:last-of-type': {
						borderBottom: 0
					}
				}
			}
		}
	}
});

export default function Index(props) {

	const classes = useStyles();
	
	function createMarkup(html) {
  		return {__html: html};
	}

	return (
		<Layout>
			<AnimateSharedLayout type="crossfade">
				<header className={classes.header}>
					<div className={classes.logo}>
						<Logo />
					</div>
					<div className={classes.descContainer}>
						<X includeText />
						{/* <p className={classes.desc}>As a creative developer with a background in design, I’m interested in highlighting the creative component of technology to enhance people’s understanding of both. I combine technology with thoughtful design to create immersive digital experiences that drive a compelling narrative and often take on a physical dimension.</p> */}
					</div>
					<div className={classes.nav}>
						<ul>
							<li><a href="#">Work</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</div>
					<div className={classes.x}>
						<X />
					</div>
				</header>

				<div className={classes.blockContainer}>
					{props.data.map((item, index) => {
						return (
							<div className={classes.blockContainerLink}>
								<Link href={`test/${item.uid}`}>
									<a>
										<div className={classes.block}>
											{RichText.render(item.data.title)}
											<span className={classes.small}>{item.data.short_description}</span>
											{/* {item.data.year}
											{item.tags} */}
										</div>
									</a>
								</Link>
							</div>
						)
					})}
				</div>
				<Marquee dir="ltr">BLM · <Music /> · BLM · <Music /> · BLM <Music /> · BLM · <Music /> · BLM · <Music /> · </Marquee>
			</AnimateSharedLayout>
		</Layout>
	)
};

Index.getInitialProps = async function() {
	const response = await Client.query(
		Prismic.Predicates.at('document.type', 'page')
	)
	const data =  await response.results;
	return {data: data};
};

