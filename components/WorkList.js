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
                                <div className={classes.block}>
                                    <div>
                                        {RichText.asText(item.data.title)}
                                    </div>
                                    <span className={classes.small}>{item.data.short_description}</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

