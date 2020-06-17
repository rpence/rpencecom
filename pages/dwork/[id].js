import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import { makeStyles } from '@material-ui/styles';
import Layout from '../../components/Layout';
import Gallery from '../../components/Gallery';
import Embed from '../../components/Embed';
import Header from '../../components/Header';
import Marquee from '../../components/Marquee';
import { useRouter } from 'next/router'


import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

const apiEndpoint = 'https://ronniepence.cdn.prismic.io/api/v2'
const accessToken = 'MC5YdFhpTGhBQUFCNEFKNlY4.Tu-_vQ3vv70wBlfvv71zPe-_ve-_ve-_ve-_ve-_ve-_ve-_vXfvv71s77-9LUdhQ0FDbB_vv73vv71t' 
const Client = Prismic.client(apiEndpoint, { accessToken })

const Logo = dynamic(() => 
	import('../../components/Logo'),
	{ ssr: false }
)

const useStyles = makeStyles((props) => {
    return {
		layoutGrid: {
			height: '100%',
			display: 'grid',
			gridTemplateColumns: 'minmax(450px, 1fr) minmax(0, .75fr) .75fr 1fr 1fr',
			gridTemplateRows: '.1fr .1fr 1fr 1fr minmax(225px, 1fr)',
			gridColumnGap: '0px',
			gridRowGap: '0px',
			transition: 'all ease .5s',
			backgroundColor: '#fff',
			boxSizing: 'border-box',
			border: '2px solid #000',
			overflow: 'hidden'
		},
		layoutGridWithContent: {
			gridTemplateColumns: 'minmax(250px, 1fr) minmax(0, 1.75fr) 1.75fr .15fr .3fr',
			gridTemplateRows: '.1fr .1fr 1fr 1fr 125px',
		},
		div1: { 
			gridArea: '1 / 1 / 2 / 6',
			borderBottom: '2px solid #000',
			textAlign: 'center',
			lineHeight: '39px',
			letterSpacing: '1px',
			fontWeight: '700'
		},
		div2: { 
			gridArea: '2 / 1 / 3 / 6', 
			borderBottom: '2px solid #000',
			padding: '0 24px',
			lineHeight: '39px',
			fontSize: '12px',
			display: 'flex',
			justifyContent: 'space-between'
		},
		div3: { 
			gridArea: '3 / 5 / 6 / 6', 
			borderLeft: '2px solid #000',
			overflow: 'hidden',
			zIndex: 1,
			backgroundColor: '#fff'
		},
		div3WithContent: {
			'&:before': {
				content: '""',
				display: 'block',
				background: 'linear-gradient(45deg, rgba(0, 0, 0, 1) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 0), linear-gradient(45deg, rgba(0, 0, 0, 1) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 0), rgba(0, 0, 0, .2)',
				backgroundRepeat: 'repeat, repeat',
				backgroundPosition: '0px 0, 2px 2px',
				backgroundOrigin: 'padding-box, padding-box',
				backgroundClip: 'border-box, border-box',
				backgroundSize: '4px 4px, 4px 4px',
				width: '10px',
				height: '82%',
				position: 'fixed',
				transform: 'translateX(-12px)'
			}
		},
		div3Inner: {
			minWidth: '300px'
		},
		div4: { 
			gridArea: '3 / 4 / 6 / 5', 
			borderLeft: '2px solid #000',
			overflow: 'hidden',
		},
		div4WithContent: {
			gridArea: '3 / 4 / 6 / 6', 
		},
		div5: { 
			gridArea: '3 / 2 / 6 / 4',
			overflow: 'auto', 
		},
		div5WithContent: {
			borderLeft: '2px solid #000',
			padding: '30px'
		},
		div6: { 
			gridArea: '5 / 1 / 6 / 2', 
			backgroundColor: '#111',
		},
		div6WithContent: {
			gridArea: '5 / 1 / 6 / 1', 
		},
		div7: { 
			gridArea: '3 / 1 / 5 / 4', 
			backgroundColor: '#fff',
			padding: '24px',
			display: 'flex',
			justifyContent: 'center',
			alignContent: 'center',
			flexDirection: 'column'
		},
		div7WithContent: {
			gridArea: '3 / 1 / 5 / 1', 
		},
		text: {
			fontSize: '.7rem',
			padding: '12px'
		},
		intro: {
			fontSize: '1.6rem'
		},
		introWithText: {
			fontSize: '.8rem'
		},
		block: {
			borderTop: '1px solid #000',
		},
		tag: {
			display: 'inline-block',
			border: '1px solid #000',
			margin: '0 5px 0',
			padding: '10px'
		}
    }
});

export default function Index(props) {

	const classes = useStyles();
	const [doc, setDocData] = useState(null)

	const router = useRouter()


	const [withContent, setWithContent] = useState(false);

	useEffect(() => {
		props.data && setWithContent(true)
	},[])
	
	function createMarkup(html) {
  		return {__html: html};
	}

	const evenPosts = props.data.filter( (i, index) => index % 2 == 0);
	const oddPosts = props.data.filter( (i, index) => index % 2);


	return (
		<Layout>
			<div className={`${classes.layoutGrid} ${ withContent && classes.layoutGridWithContent}`}>

				<Header />

				<div className={`${classes.div3} ${withContent && classes.div3WithContent}`}>
					<div className={classes.div3Inner}>
						<Marquee dir="down">
							{evenPosts.map((item, index) => {
								return (
									<div className={classes.block}>
										<img alt='cover' src={item.data.preview_image.url} />
									</div>
								)
							})}
						</Marquee>
					</div>
				</div>
				<div className={`${classes.div4} ${withContent && classes.div4WithContent}`}>
					<div className={classes.div3Inner}>
						<Marquee>
							{oddPosts.map((item, index) => {
								return (
									<div className={classes.block}>
										<img alt='cover' src={item.data.preview_image.url} />
									</div>
								)
							})}
						</Marquee>
					</div>
				</div>
				<div className={`${classes.div5} ${classes.div5WithContent}`}>
						{props.data2.data.body.map(({ slice_type, ...props }) => {
							switch (slice_type) {
							case 'gallery':
								return Gallery(props)
							case 'embed':
								return Embed(props)
							default:
								return null;
							}
						})}


				</div>
				<div className={`${classes.div6} ${withContent && classes.div6WithContent}`}>
					<Logo />
				</div>
				<div className={`${classes.div7} ${withContent && classes.div7WithContent}`}>
					<p className={`${classes.intro} ${withContent && classes.introWithText}`}>
						{props.data2.data.description ? (
							<>
								{RichText.render(props.data2.data.title)}
								{RichText.render(props.data2.data.description)}
							</>
						) : (
							<>
								As a creative developer with a background in design, I’m interested in highlighting the creative component of technology to enhance people’s understanding of both. I combine technology with thoughtful design to create immersive digital experiences that drive a compelling narrative and often take on a physical dimension.
							</>
						)}
					</p>
				</div>
			</div>
		</Layout>
	)
};

Index.getInitialProps = async function(ctx) {
	const response = await Client.query(
		Prismic.Predicates.at('document.type', 'page')
	)
	const data =  await response.results;
	const response2 = await Client.query(
		Prismic.Predicates.at('my.page.uid', ctx.query.id)
	)
	const data2 =  await response2.results;


	return {data: data, data2: data2[0]};
};

