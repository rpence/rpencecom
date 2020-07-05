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
			borderBottom: '1px solid #000',

			'@media only screen and (max-width: 768px)': {
				flexDirection: 'row',
				borderBottom: 0
			}
		},
		logo: {
			flexShrink: 0,
			flexBasis: '400px',

			'& a': {
				display: 'block',
				height: '100%'
			},

			'& .react-p5': {
				display: 'block',
				height: '100%'
			},

			'@media only screen and (max-width: 1024px)': {
				flexBasis: '300px'
			},

			'@media only screen and (max-width: 768px)': {
				flexBasis: '250px'
			}

		},
		x: {
			flexGrow: 0,
			flexBasis: '100px',
			flexShrink: 0,
			maxWidth: '100px',

			'@media only screen and (max-width: 1024px)': {
				display: 'none'
			}
		},
		desc: {
            fontSize: '.85rem',
            lineHeight: 1.6,
            letterSpacing: '.5px',
			fontFamily: '\'Cotham Sans\'',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			display: '-webkit-box',
			lineClamp: 4,
			boxOrient: 'vertical',
			'-webkit-line-clamp': 4,
			'-webkit-box-orient': 'vertical',
			'@media only screen and (max-width: 768px)': {
				display: 'none'
			}
		},
		descContainer: {
			flexGrow: 1,
			flexBasis: 'calc(100% - 300px -300px - 100px)',

			'@media only screen and (max-width: 768px)': {
				display: 'none'
			}
		},
		descContainerText: {
			padding: '20px',
			'& a': {
				textDecoration: 'none',
				color: '#000'
			},
		},
		nav: {
			flexShrink: 0,
			flexBasis: '300px',
			borderRight: '1px solid #000',
			borderLeft: '1px solid #000',

			'@media only screen and (max-width: 1024px)': {
				flexBasis: '200px'
			},

			// '@media only screen and (max-width: 768px)': {
				
			// },

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
						textDecoration: 'none',

						'&:hover': {
							color: '#0ff53d',
						}
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
                    {router.pathname === '/' ? <div className={classes.descContainerText}><a href="/about"><p className={classes.desc}>I am Ronnie Pence, a New York based artist and creative technologist combining data, machine learning, and other technologies with thoughtful design to create multisensory experiences that drive compelling narratives through digital screens and beyond.</p></a></div> : <X includeText />}
                </div>
                <div className={classes.nav}>
                    <ul>
						
                        <li><a href="/#work">Work</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/about#contact">Contact</a></li>
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