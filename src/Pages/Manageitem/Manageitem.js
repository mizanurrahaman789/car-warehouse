import React from 'react';
import { Button } from 'react-bootstrap';
import Items from '../Items/Items';

const manageitem = () => {
      return (
            <div>
                  <Items></Items>
                  <div className='text-center'>
                        <input className='mb-2' type="text" name="text" placeholder='quantity'></input>
                        <br />
                        <button>Add Item</button>
                  </div>
            </div>
      );
};

export default manageitem;