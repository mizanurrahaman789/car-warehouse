import React from 'react';
import Banar from '../../Banar/Banar';
import CarMiddle from '../../CarMiddle/CarMiddle';
import Items from '../../Items/Items';
import Restocks from '../../Restocks/Restocks';


const Home = () => {
      return (
            <div>
                  <Banar></Banar>
                  <Items></Items>
                  <Restocks></Restocks>
                  <CarMiddle></CarMiddle>


            </div>
      );
};

export default Home;