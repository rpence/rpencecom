import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

const useStyles = makeStyles((props) => {
	return {
		block: {
			padding: '10px 0 20px',
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
                    paddingLeft: '30px'
                },
                '& > div:nth-of-type(3)': {
                    textAlign: 'left',
                    flexGrow: 1,
                    paddingLeft: '30px'
                },
                '& > div:last-of-type': {
                    width: '10%',
                    flexBasis: '10%',
                    flexGrow: 0,
                    flexShrink: 0,
                    textAlign: 'right'
                },
            }
		},
		small: {
            fontSize: '.8rem',
            marginTop: '10px',
            display: 'block'
		}
    }
})

export default function WorkList(props) {

    const classes = useStyles();
    
    return (
        <> 
            {props.data.map((item, index) => {
                return (
                    <div className={classes.blockContainerLink}>
                        <Link href={`test/${item.uid}`}>
                            <a>
                                <div>
                                    <div className={classes.block}>
                                        <div>
                                            {RichText.asText(item.data.title)}
                                        </div>
                                        <span className={classes.small}>{item.data.short_description}</span>
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
    )
}

