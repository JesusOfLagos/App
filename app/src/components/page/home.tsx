import React from 'react';
import Hero from './hero';
import { ENVDATA } from '../../config';
import MidPage from './midpage';
import OurServices from './ourServices';
import Explanations from './explanations';
import Pricing from './pricing';
import Stats from './stats';
import Review from './review';
import Footer from './footer';
import Partners from './partners';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Partners />
      <Explanations />
      <OurServices />
      <MidPage />
      <Review />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home


