import React from 'react';
import './Footer.css'

const Footer = () => {
      const today = new Date();
      const year = today.getFullYear();
      return (
            <div id='buttom' className='text-center mt-5 footer-section'>
                  <h1>Copy right &copy;{year}</h1>
            </div>
      );
};

export default Footer;