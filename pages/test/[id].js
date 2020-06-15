import React from 'react';
import Layout from '../../components/Layout';
import ComponentRender from '../../components/ComponentRender'
import { makeStyles } from '@material-ui/styles';


import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'


const apiEndpoint = 'https://ronniepence.cdn.prismic.io/api/v2'
const accessToken = 'MC5YdFhpTGhBQUFCNEFKNlY4.Tu-_vQ3vv70wBlfvv71zPe-_ve-_ve-_ve-_ve-_ve-_ve-_vXfvv71s77-9LUdhQ0FDbB_vv73vv71t' 
const Client = Prismic.client(apiEndpoint, { accessToken })

const useStyles = makeStyles((props) => {
	return {
		mainContent: {
			padding: '20px',
			maxWidth: '1100px'
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
		</Layout>
	)
};

Index.getInitialProps = async function(ctx) {
	const response = await Client.query(
		Prismic.Predicates.at('my.page.uid', ctx.query.id)
	)
	const data =  await response.results;
	return {data: data[0]};
};
