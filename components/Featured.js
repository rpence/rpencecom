import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import LazyLoad from 'react-lazyload';

const useStyles = makeStyles((props) => {
	return {
        featuredBlock: {
            display: 'flex',
            margin: '0 -15px 50px',

            '@media only screen and (max-width: 768px)': {
                flexDirection: 'column'
            }
        },
		block: {
			padding: '10px 0 20px',
		},
		blockContainerLink: {
            color: '#000',
            flexBasis: 'calc(33% - 22px)',
            flexGrow: 0,
            flexShrink: 0,
            margin: '0 15px',

			'& a': {
				textDecoration: 'none',
				color: '#000',
			}
        },
        featuredImage: {
            marginBottom: '20px',
            transition: 'filter ease .5s',

            '&:hover': {
                filter: 'invert(1)'
            }
        },
		small: {
            fontSize: '.85rem',
            lineHeight: 1.6,
            marginTop: '10px',
            display: 'block',
            fontFamily: '\'Cotham Sans\'',
        },
        title: {
            fontFamily: '\'Monument Extended\'',
            fontSize: '18px'
        },
        strong: {
            display: 'block',
            marginTop: '60px',
            marginBottom: '20px'
        }
    }
})

export default function Featured(props) {

    const classes = useStyles();
    
    return (
        <>
            <strong className={classes.strong}>//Featured Work </strong>
            <div className={classes.featuredBlock}> 
                {props.data.map((item, index) => {
                    return (
                        <div className={classes.blockContainerLink} key={item.uid}>
                            <Link href={`work/${item.uid}`}>
                                <a>
                                    <div className={classes.block}>
                                        <div className={classes.featuredImage}>
                                            <LazyLoad>
                                                <img src={item.data.preview_image.url} />
                                            </LazyLoad>
                                        </div>
                                        <div className={classes.title}>
                                            {RichText.asText(item.data.title)}
                                        </div>
                                        <span className={classes.small}>{item.data.short_description}</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

