import React from 'react';

import Header from '../Header/Header.component';
import Hero from '../Hero/Hero.component';
import Footer from '../Footer/Footer.component';
import MediaSlider from '../MediaSlider/MediaSlider.component';
import './App.styles.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Hero />
        <MediaSlider />
      </div>
      <Footer />
    </div>
  );
};

export default App;
