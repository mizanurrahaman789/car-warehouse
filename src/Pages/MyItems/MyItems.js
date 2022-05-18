import React from 'react';
import Items from '../Items/Items';
import './MyItems.css'

const MyItems = () => {
      return (
            <div>
                  <h1 className='my-items'>My Items</h1>
                  <Items></Items>
            </div>
      );
};

export default MyItems;