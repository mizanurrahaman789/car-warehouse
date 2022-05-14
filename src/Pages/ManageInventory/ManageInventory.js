import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../Hooks/useItems';
import Items from '../Items/Items';



const ManageInventory = () => {
      const [items, setItems] = useItems();

      const handleDelet = id => {
            const proceed = window.confirm('Are you sure')
            if (proceed) {
                  const url = `http://localhost:5000/items/${id}`
                  fetch(url, {
                        method: 'DELETE'
                  })
                        .then(res => res.json())
                        .then(data => {
                              console.log(data)
                              const remaining = items.filter(item => item._id !== id);
                              setItems(remaining)
                        })
            }
      }
      return (
            <div>
                  <div className='w-50 mx-auto'>
                        {
                              items.map(item => <div key={item._id}>

                                    <h4>{item.name} <button onClick={() => handleDelet(item._id)}> Delet</button></h4>
                              </div>)
                        }
                  </div>
                  <div>
                        <button>Delet</button>
                  </div>
                  <div>
                        <button><Link to='AddItem'>Add New Item</Link></button>
                  </div>

            </div>
      );
};

export default ManageInventory;