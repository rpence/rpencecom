import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { makeStyles, ThemeProvider, ServerStyleSheets } from '@material-ui/styles';
import theme from '../theme/Index.js';
import CssBaseline from '../theme/CssBaseline.js';
import logo from '../public/static/logo';
import Header from '../components/Header';
import Marquee from '../components/Marquee';
import Music from '../components/Music'


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
                    <Header />
                    {props.children}
                    <Marquee dir="ltr">
                        <Music />
                    </Marquee>
                </main>
            </ThemeProvider>
        </>
    );
};

