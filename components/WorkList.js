import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

const useStyles = makeStyles((props) => {
	return {
		block: {
			padding: '10px 0 20px',
        },
        block_sm: {
            padding: '10px 0 10px',
            borderBottom: '2px solid #000'
        },
        blockContainerLinkNone: {
            textAlign: 'center',
            margin: '25px 0'
        },
		blockContainerLink: {
			borderBottom: '1px solid #000',
            color: '#000',
            position: 'relative',
            zIndex: 1,

			'& a': {
				textDecoration: 'none',
                color: '#000',
                display: 'flex',
                justifyContent: 'stretch',

                '@media only screen and (max-width: 600px)': {
                    flexDirection: 'column'
                },

                '& > div:first-of-type': {
                    width: '50%',
                    flexBasis: '50%',
                    flexGrow: 0,
                    flexShrink: 0,

                    '@media only screen and (max-width: 600px)': {
                        width: '100%',
                        flexBasis: '100%',
                    }
                },
                '& > div:nth-of-type(2)': {
                    width: '15%',
                    flexBasis: '15%',
                    flexGrow: 0,
                    flexShrink: 0,
                    paddingLeft: '60px',
                    '@media only screen and (max-width: 600px)': {
                        width: '100%',
                        flexBasis: '100%',
                        paddingLeft: 0
                    }
                },
                '& > div:nth-of-type(3)': {
                    textAlign: 'left',
                    flexGrow: 1,
                    paddingLeft: '30px',
                    '@media only screen and (max-width: 600px)': {
                        width: '100%',
                        flexBasis: '100%',
                        paddingLeft: 0
                    }
                },
                '& > div:last-of-type': {
                    width: '8%',
                    flexBasis: '8%',
                    flexGrow: 0,
                    flexShrink: 0,
                    textAlign: 'right',
                    '@media only screen and (max-width: 600px)': {
                        width: '100%',
                        flexBasis: '100%',
                        textAlign: 'left'
                    }
                },
            }
		},
		small: {
            fontSize: '.7rem',
            marginTop: '10px',
            display: 'block',
            textTransform: 'uppercase'
        },
        desc: {
            fontSize: '.85rem',
            fontFamily: '\'Cotham Sans\'',
            letterSpacing: '.8px'
        },
        title: {
            fontFamily: '\'Cotham Sans\'',
            margin: '5px 0',
            fontWeight: '900'
        },
        strong: {
            marginBottom: '20px',
            display: 'block'
        },
        hoverImg: {
            position: 'fixed',
            top: '50%',
            left: '60%',
            transform: 'translate(0, -50%)',
            zIndex: 0,
            width: 'auto',
            maxWidth: '500px',
            maxHeight: '80%'
        }
    }
})

export default function WorkList(props) {

    const classes = useStyles();

    const [image, setImage] = useState(null)
    
    const handleHover = (url) => {
        setImage(url);
    }
    
    const posts = props.data.filter( (data) => {
        return !data.data.locked 
    })


    return (
        <> 
            <strong className={classes.strong}>// Archive </strong>

            <div className={classes.blockContainerLink}>
                <a>
                    <div className={classes.block_sm}>
                        <span className={classes.small}>
                            PROJECT
                        </span>
                    </div>
                    <div className={classes.block_sm}>
                        <span className={classes.small}>
                            MEDIUM
                        </span>
                    </div>
                    <div className={classes.block_sm}>
                        <span className={classes.small}>
                            TAGS
                        </span>
                    </div>
                    <div className={classes.block_sm}>
                        <span className={classes.small}>
                            YEAR
                        </span>
                    </div>
                </a>
            </div>

            {posts.length > 0 ? (
                <>
                    {setImage && <img src={image} className={classes.hoverImg} />}

                    {posts.map((item, index) => {

                        const filters = item.data.body.filter( (item, index) => {
                            return item.slice_type === 'tags'
                        });

                        return (
                            <div className={classes.blockContainerLink} key={item.uid}>
                                <Link href={`/work/${item.uid}`}>
                                    <a 
                                        onMouseEnter={() => handleHover(item.data.preview_image.url)}
                                        onMouseLeave={() => handleHover(null)}>
                                        <div>
                                            <div className={classes.block}>
                                                <div className={classes.title}>
                                                    {RichText.asText(item.data.title)}
                                                </div>
                                                <span className={classes.desc}>{item.data.short_description}</span>
                                            </div>
                                        </div>
                                        <div className={classes.block}>
                                            <span className={classes.small}>
                                                {item.data.medium}
                                            </span>
                                        </div>
                                        <div className={classes.block}>
                                            <span className={classes.small}>
                                                {JSON.stringify(item.tags)}
                                            </span>
                                        </div>
                                        <div className={classes.block}>
                                            <span className={classes.small}>
                                                {item.data.year}
                                            </span>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        )
                    })}
                </>
            ) : (
                <>
                    <div className={classes.blockContainerLinkNone}>There's nothing that matches the filters selected. Try something else?</div>
                </>
            )}


            
        </>
    )
}

