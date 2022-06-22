import React from 'react'
import Head from "next/head"
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="portfolio 2022 Zabdiel" />
        <meta name="description" content="This is my portfolio" />
        <meta charSet="utf-8"/>
        <title>My portfolio</title>
      </Head>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
