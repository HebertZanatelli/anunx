import React from "react"
import PropTypes from 'prop-types'
import Head from "next/head"
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ToastyProvider } from "../src/contexts/Toasty"
import theme from "../src/theme"


export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <React.Fragment>
      <Head>
        <title>AnunX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <ToastyProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ToastyProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
