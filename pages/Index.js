import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import { makeStyles } from '@material-ui/styles';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Marquee from '../components/Marquee';
import { request } from 'graphql-request'


const Logo = dynamic(() => 
	import('../components/Logo'),
	{ ssr: false }
)

const useStyles = makeStyles(() => {
    return {
        gridContainer: { 
			boxSizing: 'border-box',
			maxHeight: '100%',
			margin: 0,
			fontFamily: 'DM Mono',
			fontSize: '10px',
			display: 'grid',
  			padding: '24px',
  			gridTemplateColumns: '1fr minmax(0px, 1.25fr) repeat(2, minmax(300px, .55fr))',
  			gridTemplateRows: 'repeat(3, 1fr)',
  			gap: '24px 24px',
			gridTemplateAreas: '\'info main-content left right\' \'info main-content left right\' \'logo main-content left right\'',
		},
		right: { 
			gridArea: 'right',
			overflow: 'auto'
		},
		left: { 
			gridArea: 'left',
			overflow: 'auto'
		},
		mainContent: { 
			gridArea: 'main-content',
			overflow: 'auto'
		},
		info: { 
			gridArea: 'info'
		},
		logo: { 
			gridArea: 'logo'
		},
		blockquote: {
			margin: 0,
			padding: 0,
			fontSize: '1.8rem',
		},
		cell: {
			padding: '20px 0',
			borderBottom: '1px solid #000'
		}
    }
});

export default function Index(props) {

	const classes = useStyles();

	const [mountLogo, setMountLogo] = useState();
	const [pages, setPages] = useState(null);


	useEffect(() => {
		typeof window !== 'undefined' && setMountLogo(true)

		const fetchPages = async () => {
			const { pages } = await request (
				'https://api-us-east-1.graphcms.com/v2/ckasumwa00pd101yshb8m6q5a/master',
				`
				{
					pages {
						id
						title
						previewPhoto {
							id
							url
						}
						description {
							html
						}
					}
				}	
				`
			);
			setPages(pages);
			console.log(pages);
		};
		fetchPages();
	}, []);

	function createMarkup(html) {
  		return {__html: html};
	}

	return (
		<Layout>
			<div className={classes.gridContainer}>
				<div className={classes.right}>
					<Marquee dir="down">	
						<div className={classes.cell}>
							<img src="http://www.ronniepence.com/static/img/snapshots/logo1.jpg" />
						</div>
						<div className={classes.cell}>
							<blockquote className={classes.blockquote}>"This website exists solely to magnify the prophets of the great property of the end of the belly."</blockquote>
						</div>
						<div className={classes.cell}>
							<img src="http://www.ronniepence.com/static/img/cells/seed3875525.png" />
							<p>Machine generated images and videos exploring the dichotomy of the colossal and the microscopic through like forms.</p>
						</div>
						<div className={classes.cell}>
							<img src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/36554142_238541703541219_167430804589248512_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=SFSs312xb7cAX8jvyoQ&oh=58fcc5ee47c21e6a848d48c1882fdfa1&oe=5EF97997" />
						</div>
					</Marquee>
				</div>
				<div className={classes.left}>
					<Marquee>
						{pages && pages.map(({ id, title, previewPhoto, description }) => (
							<div className={classes.cell} key={id}>
								<img src={previewPhoto.url} />
								{description && <div dangerouslySetInnerHTML={createMarkup(description.html)} />}
							</div>
						))}
					</Marquee>
				</div>
				<div className={classes.mainContent}>
					<div>
						<p>1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, elit a congue suscipit, magna sapien accumsan mi, aliquam porttitor orci sem eu metus. Nunc vel ligula risus. Vestibulum egestas ante ut tellus fermentum, ut egestas ipsum fermentum. Nulla nec purus diam. Aenean facilisis vehicula libero a ornare. Pellentesque iaculis dui urna, interdum egestas diam cursus quis. Nunc id efficitur diam, commodo aliquet est. Fusce volutpat nec metus eget luctus. Curabitur nec orci lorem.</p>
						<p>2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, elit a congue suscipit, magna sapien accumsan mi, aliquam porttitor orci sem eu metus. Nunc vel ligula risus. Vestibulum egestas ante ut tellus fermentum, ut egestas ipsum fermentum. Nulla nec purus diam. Aenean facilisis vehicula libero a ornare. Pellentesque iaculis dui urna, interdum egestas diam cursus quis. Nunc id efficitur diam, commodo aliquet est. Fusce volutpat nec metus eget luctus. Curabitur nec orci lorem.</p>
						<p>3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, elit a congue suscipit, magna sapien accumsan mi, aliquam porttitor orci sem eu metus. Nunc vel ligula risus. Vestibulum egestas ante ut tellus fermentum, ut egestas ipsum fermentum. Nulla nec purus diam. Aenean facilisis vehicula libero a ornare. Pellentesque iaculis dui urna, interdum egestas diam cursus quis. Nunc id efficitur diam, commodo aliquet est. Fusce volutpat nec metus eget luctus. Curabitur nec orci lorem.</p>
						<p>4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, elit a congue suscipit, magna sapien accumsan mi, aliquam porttitor orci sem eu metus. Nunc vel ligula risus. Vestibulum egestas ante ut tellus fermentum, ut egestas ipsum fermentum. Nulla nec purus diam. Aenean facilisis vehicula libero a ornare. Pellentesque iaculis dui urna, interdum egestas diam cursus quis. Nunc id efficitur diam, commodo aliquet est. Fusce volutpat nec metus eget luctus. Curabitur nec orci lorem.</p>				
						<p>5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, elit a congue suscipit, magna sapien accumsan mi, aliquam porttitor orci sem eu metus. Nunc vel ligula risus. Vestibulum egestas ante ut tellus fermentum, ut egestas ipsum fermentum. Nulla nec purus diam. Aenean facilisis vehicula libero a ornare. Pellentesque iaculis dui urna, interdum egestas diam cursus quis. Nunc id efficitur diam, commodo aliquet est. Fusce volutpat nec metus eget luctus. Curabitur nec orci lorem.</p>
						<p>6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, elit a congue suscipit, magna sapien accumsan mi, aliquam porttitor orci sem eu metus. Nunc vel ligula risus. Vestibulum egestas ante ut tellus fermentum, ut egestas ipsum fermentum. Nulla nec purus diam. Aenean facilisis vehicula libero a ornare. Pellentesque iaculis dui urna, interdum egestas diam cursus quis. Nunc id efficitur diam, commodo aliquet est. Fusce volutpat nec metus eget luctus. Curabitur nec orci lorem.</p>
						<p>7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, elit a congue suscipit, magna sapien accumsan mi, aliquam porttitor orci sem eu metus. Nunc vel ligula risus. Vestibulum egestas ante ut tellus fermentum, ut egestas ipsum fermentum. Nulla nec purus diam. Aenean facilisis vehicula libero a ornare. Pellentesque iaculis dui urna, interdum egestas diam cursus quis. Nunc id efficitur diam, commodo aliquet est. Fusce volutpat nec metus eget luctus. Curabitur nec orci lorem.</p>
						<p>8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, elit a congue suscipit, magna sapien accumsan mi, aliquam porttitor orci sem eu metus. Nunc vel ligula risus. Vestibulum egestas ante ut tellus fermentum, ut egestas ipsum fermentum. Nulla nec purus diam. Aenean facilisis vehicula libero a ornare. Pellentesque iaculis dui urna, interdum egestas diam cursus quis. Nunc id efficitur diam, commodo aliquet est. Fusce volutpat nec metus eget luctus. Curabitur nec orci lorem.</p>
						<p>9 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, elit a congue suscipit, magna sapien accumsan mi, aliquam porttitor orci sem eu metus. Nunc vel ligula risus. Vestibulum egestas ante ut tellus fermentum, ut egestas ipsum fermentum. Nulla nec purus diam. Aenean facilisis vehicula libero a ornare. Pellentesque iaculis dui urna, interdum egestas diam cursus quis. Nunc id efficitur diam, commodo aliquet est. Fusce volutpat nec metus eget luctus. Curabitur nec orci lorem.</p>
						<p>10 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, elit a congue suscipit, magna sapien accumsan mi, aliquam porttitor orci sem eu metus. Nunc vel ligula risus. Vestibulum egestas ante ut tellus fermentum, ut egestas ipsum fermentum. Nulla nec purus diam. Aenean facilisis vehicula libero a ornare. Pellentesque iaculis dui urna, interdum egestas diam cursus quis. Nunc id efficitur diam, commodo aliquet est. Fusce volutpat nec metus eget luctus. Curabitur nec orci lorem.</p>
						<p>11 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, elit a congue suscipit, magna sapien accumsan mi, aliquam porttitor orci sem eu metus. Nunc vel ligula risus. Vestibulum egestas ante ut tellus fermentum, ut egestas ipsum fermentum. Nulla nec purus diam. Aenean facilisis vehicula libero a ornare. Pellentesque iaculis dui urna, interdum egestas diam cursus quis. Nunc id efficitur diam, commodo aliquet est. Fusce volutpat nec metus eget luctus. Curabitur nec orci lorem.</p>
						<p>12 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, elit a congue suscipit, magna sapien accumsan mi, aliquam porttitor orci sem eu metus. Nunc vel ligula risus. Vestibulum egestas ante ut tellus fermentum, ut egestas ipsum fermentum. Nulla nec purus diam. Aenean facilisis vehicula libero a ornare. Pellentesque iaculis dui urna, interdum egestas diam cursus quis. Nunc id efficitur diam, commodo aliquet est. Fusce volutpat nec metus eget luctus. Curabitur nec orci lorem.</p>
						<p>13 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, elit a congue suscipit, magna sapien accumsan mi, aliquam porttitor orci sem eu metus. Nunc vel ligula risus. Vestibulum egestas ante ut tellus fermentum, ut egestas ipsum fermentum. Nulla nec purus diam. Aenean facilisis vehicula libero a ornare. Pellentesque iaculis dui urna, interdum egestas diam cursus quis. Nunc id efficitur diam, commodo aliquet est. Fusce volutpat nec metus eget luctus. Curabitur nec orci lorem.</p>
						<p>14 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, elit a congue suscipit, magna sapien accumsan mi, aliquam porttitor orci sem eu metus. Nunc vel ligula risus. Vestibulum egestas ante ut tellus fermentum, ut egestas ipsum fermentum. Nulla nec purus diam. Aenean facilisis vehicula libero a ornare. Pellentesque iaculis dui urna, interdum egestas diam cursus quis. Nunc id efficitur diam, commodo aliquet est. Fusce volutpat nec metus eget luctus. Curabitur nec orci lorem.</p>
					</div>
				</div>
				<div className={classes.info}>
				</div>
   			 	<div className={classes.logo}>
					{mountLogo && <Logo />}
				</div>
			</div>
		</Layout>
	)
};

Index.getInitialProps = async function() {
	const res = await fetch('http://ronnie.mydroogs.com/cockpit/api/collections/get/project?token=9c67d31452921679bfe35d6e7d405d');
	const data = await res.json();
	return data.entries[0];
};

