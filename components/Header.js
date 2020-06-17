import React from 'react';
import dynamic from 'next/dynamic'
import { makeStyles } from '@material-ui/styles';
import X from '../components/X';
import Link from 'next/link'
import { useRouter } from 'next/router'


const Logo = dynamic(() => 
	import('../components/Logo'),
	{ ssr: false }
)

const useStyles = makeStyles((props) => {
    return {
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
            fontSize: '.85rem',
            lineHeight: 1.6,
            letterSpacing: '.5px',
            padding: '20px',
            fontFamily: '\'Cotham Sans\'',
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


export default function Header(props) {

    const classes = useStyles();
    const router = useRouter();

    return (
        <>
            <header className={classes.header}>
                <div className={classes.logo}>
                    <Link href="/">
                        <a>
                            <Logo />
                        </a>
                    </Link>
                </div>
                <div className={classes.descContainer}>
                    {Object.keys(router.query).length === 0 ? <p className={classes.desc}>As a creative developer with a background in design, I’m interested in highlighting the creative component of technology to enhance people’s understanding of both. I combine technology with thoughtful design to create immersive digital experiences that drive a compelling narrative and often take on a physical dimension.</p> : <X includeText />}
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
        </>
    )
}

Header.getInitialProps = async function(ctx) {
    return {page: ctx.query.id}
}