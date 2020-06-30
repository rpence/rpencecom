import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Layout from '../components/Layout';
import All from '../components/All'
import Prismic from 'prismic-javascript'
import Head from 'next/head'


const apiEndpoint = 'https://ronniepence.cdn.prismic.io/api/v2'
const accessToken = 'MC5YdFhpTGhBQUFCNEFKNlY4.Tu-_vQ3vv70wBlfvv71zPe-_ve-_ve-_ve-_ve-_ve-_ve-_vXfvv71s77-9LUdhQ0FDbB_vv73vv71t' 
const Client = Prismic.client(apiEndpoint, { accessToken })


const useStyles = makeStyles((props) => {
	return {
		blockContainer: {
			marginBottom: '50px',
			padding: '20px',
			maxWidth: '1100px',
		},
		block: {
			padding: '10px 0 20px',
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
		}
	}
});

export default function Index(props) {

	const classes = useStyles();
	
	function createMarkup(html) {
  		return {__html: html};
	}

	return (
		<>
			<Head>
				<title>Ronnie Pence · Creative Technologist</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" type="image/png" href="/static/img/logo-dark.png"></link>
			</Head>
			<Layout>
				<div className={classes.blockContainer}>
					<All 
						data={props.data} />
				</div>
			</Layout>
		</>
	)
};

Index.getInitialProps = async function() {
	const response = await Client.query(
		Prismic.Predicates.at('document.type', 'page'),
		{ pageSize : 100 }
	)
	const data =  await response.results;
	return {data: data};
};

