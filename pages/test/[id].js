import React from 'react';
import Layout from '../../components/Layout';
import ComponentRender from '../../components/ComponentRender'
import { makeStyles } from '@material-ui/styles';

import All from '../../components/All'

import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'


const apiEndpoint = 'https://ronniepence.cdn.prismic.io/api/v2'
const accessToken = 'MC5YdFhpTGhBQUFCNEFKNlY4.Tu-_vQ3vv70wBlfvv71zPe-_ve-_ve-_ve-_ve-_ve-_ve-_vXfvv71s77-9LUdhQ0FDbB_vv73vv71t' 
const Client = Prismic.client(apiEndpoint, { accessToken })

const useStyles = makeStyles((props) => {
	return {
		mainContent: {
			padding: '20px',
			maxWidth: 'calc(100% - 100px - 50px)'
		},
		menuContent: {
			position: 'fixed',
			left: 'calc(100% - 101px)',
			height: '100%',
			overflow: 'scroll',
			width: '100vw',
			borderLeft: '1px solid #000',
			top: '0',
			backgroundColor: '#fff',
			paddingLeft: '30px'
		},
		draggable: {
			position: 'fixed',
			top: '50%',
			left: 'calc(100% - 101px - 10px)',
			marginTop: 'calc(-42px/2)',
			background: '#fff',
			border: '1px solid #000',
			padding: '10px 5px',
			cursor: 'pointer'
		},
		desc: {
			maxWidth: '75%',
			fontSize: '1.1rem',
			lineHeight: '1.6',
			fontFamily: 'Cotham Sans'
		}
	}
})

export default function Index(props) {

	const classes = useStyles();
	
	function createMarkup(html) {
  		return {__html: html};
	}

	return (
		<Layout>
			<div className={classes.mainContent}>
				{RichText.render(props.data.data.title)}
				<div className={classes.desc}>
					{RichText.render(props.data.data.description)}
				</div>
				<ComponentRender data={props.data.data.body} />
			</div>
			<div className={classes.menuContent}>
				<All 
					data={props.allPosts}
					hideFeatured />
			</div>
		</Layout>
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
