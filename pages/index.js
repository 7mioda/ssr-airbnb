import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import CssReseter from '../lib/reset-css';
import HomeListing from '../components/HomeListing/HomeListing';

const Index = () => (
  <div>
    <Head>
      <title>Airbnb</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
        rel="stylesheet"
      />
    </Head>
    <CssReseter />
    <HomeBanner />

    {/*<HomeListing />*/}
    <Footer />
  </div>
);

export default Index;
