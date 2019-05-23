import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import CssReseter from '../lib/reset-css';
import HomeListing from '../components/HomeListing/HomeListing';
import MenuWrapper from '../components/Menu/MenuWrapper';
import React from 'react';
import HomePlus from '../components/HomePlus/HomePlus'
import Rater from '../components/Rater/Rater'
import HomeExplorer from '../components/HomeExplorer/HomeExplorer';
import HomeRecommandation from '../components/HomeRecommandation/HomeRecommandation';
import HomeHost from '../components/HomeHost/HomeHost'


const Index = () => (
  <div>
    <Head>
      <title>Airbnb</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,600,700"
        rel="stylesheet"
      />
    </Head>
    <CssReseter />
    <MenuWrapper />
    <HomeBanner />
    <div style={{ maxWidth: '1520px', margin: '10px auto' }}>
      <HomeExplorer />
      <HomePlus />
      <HomeRecommandation />
      <HomeHost />
      <HomeListing />
    </div>
    <Footer />
  </div>
);

export default Index;
