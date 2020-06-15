import React from 'react';
import { makeStyles } from '@material-ui/styles';
import theme from './Index.js';


const useStyles = makeStyles(() => {
	return {
		'@global': {
			'@font-face': [{
				fontFamily: 'DM Mono',
  				src: "local('DM Mono Regular'), local('DMMono-Regular'), url(https://fonts.gstatic.com/s/dmmono/v1/aFTU7PB1QTsUX8KYthqQBK6PYK0.woff2) format('woff2')",
  				unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
			}],
			html: {
				margin: 0,
				height: '100%'
			},
			img: {
				maxWidth: '100%'
			},
			body: {
				padding: 0,
				margin: 0,
				fontFamily: '\'DM Mono\'',
				height: '100%',
				// background: 'conic-gradient(rgba(255,130,130,1) 0%, rgba(255,209,104,1) 15%, rgba(247,255,154,1) 33%, rgba(116,255,119,1) 47%, rgba(111,192,255,1) 63%, rgba(163,134,255,1) 83%, rgba(255,130,130,1) 100%)'
			},
			'h1': {
				fontSize: '26px',
				fontFamily: 'Cotham Sans'
			},
			'.p5Canvas': {
				width: '100%',
				height: '100%',
			},
			'#__next': {
				maxHeight: '100%'
			}
		}
	}
});

export default function CssBaseLine(props) {
    const classes = useStyles();

    return null
};

