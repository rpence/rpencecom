import React, { useState } from 'react';
import Layout from '../../components/Layout';
import ComponentRender from '../../components/ComponentRender'
import { makeStyles } from '@material-ui/styles';
import Head from 'next/head'

import ToggleWorkList from '../../components/ToggleWorkList'

import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'


const apiEndpoint = 'https://ronniepence.cdn.prismic.io/api/v2'
const accessToken = 'MC5YdFhpTGhBQUFCNEFKNlY4.Tu-_vQ3vv70wBlfvv71zPe-_ve-_ve-_ve-_ve-_ve-_ve-_vXfvv71s77-9LUdhQ0FDbB_vv73vv71t' 
const Client = Prismic.client(apiEndpoint, { accessToken })

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

	}
})

export default function Index(props) {

	const classes = useStyles();
	
	function createMarkup(html) {
  		return {__html: html};
	}

	const data = props.data.data.body[0].items.reverse();

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>Bookmarks | Ronnie Pence</title>
				<link rel="icon" type="image/png" href="/static/logo-dark.png"></link>
			</Head>
			<Layout>
				<div className={classes.mainContent}>
					<h1>Bookmarks</h1>

					{data.map( (link, index) => {
						return (
							<>
								<a href={link.link_url} target="_blank" rel="noopener noreferrer">
									{RichText.render(link.link_title)}
								</a>
							</>
						)
					})}
				</div>
			</Layout>
		</>
	)
};

Index.getInitialProps = async function(ctx) {
	const response = await Client.query(
		Prismic.Predicates.at('document.type', 'links')
	)
	const data =  await response.results;


	return {data: data[0]};
};
