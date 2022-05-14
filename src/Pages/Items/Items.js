import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
      const [items, setItems] = useState([]);

      useEffect(() => {
            fetch('http://localhost:5000/items')
                  .then(res => res.json())
                  .then(data => setItems(data))
      }, [])

      return (
            <div id='Items' className='container'>
                  <div className='row mt-5'>
                        {
                              items.map(item => <Item
                                    key={item._id}
                                    item={item}
                              ></Item>)
                        }
                  </div>
            </div>
      );
};

export default Items;