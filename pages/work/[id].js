import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import { makeStyles } from '@material-ui/styles';
import theme from '../../theme/Index.js';
import fetch from 'isomorphic-unfetch';
import Image from '../../components/Image';
import Gallery from '../../components/Gallery';
import Layout from '../../components/Layout';
import Text from '../../components/Text';


const Logo = dynamic(() => 
	import('../../components/Logo'),
	{ ssr: false }
)


export default function Work(props) {

	const [mountLogo, setMountLogo] = useState();

	useEffect(() => {
		typeof window !== 'undefined' && setMountLogo(true)
	}, []);

	function createMarkup(html) {
  		return {__html: html};
	}

	return (
		<Layout>

			{mountLogo && <Logo />}

			<h1>{props.title}</h1>

			<div dangerouslySetInnerHTML={createMarkup(`${props.description}`)} />

			{props.details && props.details.map((detail, i) => {
				return (
					<div key={i}>
						{detail.value.property} 
						<div dangerouslySetInnerHTML={createMarkup(`${detail.value.value}`)} />
					</div>
				)
			})}

			{props.body && props.body[0] && props.body[0].children.map((elem, i) => {
				switch (elem.component) {
					case "image":
						return <Image data={elem.settings} />
					case "gallery": 
						return <Gallery data={elem.settings} />
					case "text": 
						return <Text data={elem.settings} />
				}
			})}



		</Layout>
	)
};

Work.getInitialProps = async function(context) {
	const { id } = context.query;
	const res = await fetch(`http://ronnie.mydroogs.com/cockpit/api/collections/get/project?token=9c67d31452921679bfe35d6e7d405d&filter[slug]=${id}&limit=1`);
	const data = await res.json();
	return data && data.entries && data.entries[0] ? data.entries[0] : [];
};

