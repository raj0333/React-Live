// App.js
import React from 'react';
import  Banner from '../Components/Banner.js';
import TabsView from './TabsView.js';
import Api from './Api.js';
import Data from './Data.js';
import ContactForm from './ContactForm.js';

const Home = () => {
  const bannerData = {
    image: 'https://via.placeholder.com/800x600', // Replace with your image URL
    title: 'Welcome to Our Site',
    subtitle: 'Your journey starts here',
  };

  return (
    <div>
      <Banner 
        image={bannerData.image} 
        title={bannerData.title} 
        subtitle={bannerData.subtitle} 
      />
      <TabsView />
      <Api/>
      <Data/>
      <ContactForm />
    </div>
  );
};

export default Home;