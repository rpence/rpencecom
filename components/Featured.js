import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

const useStyles = makeStyles((props) => {
	return {
        featuredBlock: {
            display: 'flex',
            margin: '0 -15px 50px',
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
            marginBottom: '20px'
        },
		small: {
            fontSize: '.85rem',
            lineHeight: 1.6,
            marginTop: '10px',
            display: 'block',
            fontFamily: '\'Cotham Sans\'',
        },
        title: {
            fontFamily: '\'Cotham Sans\'',
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
                            <Link href={`test/${item.uid}`}>
                                <a>
                                    <div className={classes.block}>
                                        <div className={classes.featuredImage}>
                                            <img src={item.data.preview_image.url} />
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

