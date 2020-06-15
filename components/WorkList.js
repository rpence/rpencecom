import React from 'react';
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
		blockContainerLink: {
			borderBottom: '1px solid #000',
			color: '#000',

			'& a': {
				textDecoration: 'none',
                color: '#000',
                display: 'flex',
                justifyContent: 'stretch',

                '& > div:first-of-type': {
                    width: '50%',
                    flexBasis: '50%',
                    flexGrow: 0,
                    flexShrink: 0
                },
                '& > div:nth-of-type(2)': {
                    width: '15%',
                    flexBasis: '15%',
                    flexGrow: 0,
                    flexShrink: 0,
                    paddingLeft: '60px'
                },
                '& > div:nth-of-type(3)': {
                    textAlign: 'left',
                    flexGrow: 1,
                    paddingLeft: '30px'
                },
                '& > div:last-of-type': {
                    width: '5%',
                    flexBasis: '5%',
                    flexGrow: 0,
                    flexShrink: 0,
                    textAlign: 'right'
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
            fontSize: '.7rem'
        },
        strong: {
            marginBottom: '20px',
            display: 'block'
        }
    }
})

export default function WorkList(props) {

    const classes = useStyles();
    
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

            {props.data.map((item, index) => {


                const filters = item.data.body.filter( (item, index) => {
                    return item.slice_type === 'tags'
                });

                return (
                    <div className={classes.blockContainerLink}>
                        <Link href={`test/${item.uid}`}>
                            <a>
                                <div>
                                    <div className={classes.block}>
                                        <div>
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
                                        {filters[0] && filters[0].items && filters[0].items.map((item, index) => {
                                            return (
                                                <>{item.tags.slug}</>
                                            )
                                        })}

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
    )
}

