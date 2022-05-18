import React from 'react';
import './Footer.css';


const Footer = () => {
      const today = new Date();
      const year = today.getFullYear();
      return (


            <footer className=" bg-black h-10 py-5">
                  <div>
                        <div className="text-white">
                              <p className='text-center'>Copy right &copy;{year}  All rights reserved</p>
                        </div>

                  </div>

            </footer>

      );
};

export default Footer;