import React from 'react';
import Head from 'next/head';
import { makeStyles, ThemeProvider, ServerStyleSheets } from '@material-ui/styles';
import theme from '../theme/Index.js';
import CssBaseline from '../theme/CssBaseline.js';
import logo from '../public/static/logo';

const useStyles = makeStyles(() => {
    return {
        rpLogo: {
            width: '100px',
            margin: '50px auto 0',
            '& svg': {
                margin: '0 auto',
                width: '100px',
                fill:  theme.palette.text
            }
        }
    }
});

export default function Layout(props) {

    const classes = useStyles();

    function createMarkup() {
        return {__html: logo};
    }

    return (
        <>
            <CssBaseline />
            <Head>
                <meta charSet="UTF-8" />
            </Head>
            <ThemeProvider theme={theme}>
                <main>
                    {props.children}
                </main>
            </ThemeProvider>
        </>
    );
};

