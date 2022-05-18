import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import ItemDetails from '../ItemDetails/ItemDetails';


const Inventory = () => {
      const [items, setItems] = useState([]);

      useEffect(() => {
            fetch('http://localhost:5000/items')
                  .then(res => res.json())
                  .then(data => setItems(data))
      }, [])
      return (
            <div >
                  <div>
                        <div id='Items' className='container'>
                              <div className='row mt-5'>
                                    {
                                          items.slice(0, 6).map(item => <Item
                                                key={item._id}
                                                item={item}
                                          ></Item>)
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Inventory;