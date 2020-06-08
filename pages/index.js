import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import { makeStyles } from '@material-ui/styles';
import Layout from '../components/Layout';
import Link from 'next/link'
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'


const apiEndpoint = 'https://ronniepence.cdn.prismic.io/api/v2'
const accessToken = 'MC5YdFhpTGhBQUFCNEFKNlY4.Tu-_vQ3vv70wBlfvv71zPe-_ve-_ve-_ve-_ve-_ve-_ve-_vXfvv71s77-9LUdhQ0FDbB_vv73vv71t' 
const Client = Prismic.client(apiEndpoint, { accessToken })

const Logo = dynamic(() => 
	import('../components/Logo'),
	{ ssr: false }
)

const useStyles = makeStyles((props) => {

});

export default function Index(props) {

	const classes = useStyles();
	
	function createMarkup(html) {
  		return {__html: html};
	}

	return (
		<Layout>
			<AnimateSharedLayout type="crossfade">
				<div className={classes.blockContainer}>
					{props.data.map((item, index) => {
						return (
							<Link href={`test/${item.uid}`}>
								<a>
									<div className={classes.block}>
										{RichText.render(item.data.title)}
									</div>
								</a>
							</Link>
						)
					})}
				</div>
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

