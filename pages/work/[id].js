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
		desc: {
			maxWidth: '75%',
			fontSize: '1.1rem',
			lineHeight: '1.6',
			fontFamily: '\'Cotham Sans\'',

			'@media only screen and (max-width: 768px)': {
				maxWidth: 'none'
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
				<title>{RichText.asText(props.data.data.title)} | Ronnie Pence</title>
				<meta name="description" content={RichText.asText(props.data.data.description)} />
				<meta property="og:title" content={RichText.asText(props.data.data.title)} />
				<meta property="og:description" content={RichText.asText(props.data.data.description)} />
				<meta property="og:image" content={props.data.data.preview_image.url} />
				<link rel="icon" type="image/png" href="/static/logo-dark.png"></link>
			</Head>
			<Layout>
				<div className={classes.mainContent}>
					{RichText.render(props.data.data.title)}
					<div className={classes.desc}>
						{RichText.render(props.data.data.description)}
					</div>
					<ComponentRender data={props.data.data.body} />
				</div>
				<hr />
				<ToggleWorkList
					data={props.allPosts} />

			</Layout>
		</>
	)
};

Index.getInitialProps = async function(ctx) {
	const response = await Client.query(
		Prismic.Predicates.at('my.page.uid', ctx.query.id)
	)
	const data =  await response.results;

	const postResponse = await Client.query(
		Prismic.Predicates.at('document.type', 'page'),
		{ pageSize : 100 }
	)
	const allPosts =  await postResponse.results;

	return {data: data[0], allPosts: allPosts};
};
