import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


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
    <Header />
    <p>Hello Next.js</p>
    <Footer />
  </div>
);

export default Index;
