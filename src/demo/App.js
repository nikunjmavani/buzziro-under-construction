import React from 'react';
import UnderConstruction from '../lib';
import logo from './logo.jpg';

const App = () => (
  <UnderConstruction
    background={{
      // image: 'https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg',
      textColor: '#ffffff',
      // overlay: {
      //   color: '#000',
      //   opacity: '.5'
      // }
    }}
    logo={{
      src: logo,
      alt: 'logo',
      style: {
        width: '120px',
        color: 'red'
      }
    }}
    description={{
      text: 'Our website is under construction. We\'ll be here soon.',
      style: {
        maxWidth: '380px',
        color: 'gray'
      }
    }}
    // subscribe={{
    //   placeholder: 'Enter your email',
    //   buttonText: 'Subscribe',
    //   onSubmit: (value) => {
    //     console.log('user typed email :', value);
    //   }
    // }}
    // links={[
    //   {
    //     url: 'https://www.facebook.com/',
    //     image: 'https://image.flaticon.com/icons/svg/220/220200.svg',
    //   },
    //   {
    //     url: 'https://www.twitter.com/',
    //     image: 'https://image.flaticon.com/icons/svg/145/145812.svg',
    //   },
    //   {
    //     url: 'https://www.linkedin.com/',
    //     image: 'https://image.flaticon.com/icons/svg/145/145807.svg',
    //   },
    //   {
    //     url: 'mailto:someone@example.com',
    //     image: 'https://image.flaticon.com/icons/svg/321/321817.svg',
    //   },
    // ]}
  />
);

export default App;
