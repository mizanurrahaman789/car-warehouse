import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
      const [items, setItems] = useState([]);

      useEffect(() => {
            fetch('Items.json')
                  .then(res => res.json())
                  .then(data => setItems(data))
      }, [])
      console.log(items)
      return (
            <div>
                  <h3>items</h3>
                  <p>itemssss {items.length}</p>

                  <div className='items-container'>
                        {
                              items.map(item => <Item
                                    key={item.id}
                                    item={item}
                              ></Item>)
                        }
                  </div>
            </div>
      );
};

export default Items;