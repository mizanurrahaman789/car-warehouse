import React from 'react';
import './Restocks.css'
import car1 from '../../image/car/car-1.jpg'
import car2 from '../../image/car/car-2.jpg'
import car3 from '../../image/car/car-3.jpg'
import car4 from '../../image/car/car-4.jpg'
import car5 from '../../image/car/car-5.jpg'
import car6 from '../../image/car/car-6.jpg'
import Restock from '../Restock/Restock';

const restocks = [
      { id: 1, name: 'rocksen', price: 35, img: car1 },
      { id: 2, name: 'rocksen', price: 35, img: car2 },
      { id: 3, name: 'rocksen', price: 35, img: car3 },
      { id: 4, name: 'rocksen', price: 35, img: car4 },
      { id: 5, name: 'rocksen', price: 35, img: car5 },
      { id: 6, name: 'rocksen', price: 35, img: car6 }
]

const Restocks = () => {

      return (
            <div id='Restock' className='container'>
                  <div className='row mt-5'>
                        {
                              restocks.map(restock => <Restock
                                    key={restock.id}
                                    restock={restock}
                              ></Restock>)
                        }
                  </div>
            </div>
      );
};

export default Restocks;