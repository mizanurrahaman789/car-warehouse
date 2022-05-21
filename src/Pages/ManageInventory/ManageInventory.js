import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../Hooks/useItems';
import Items from '../Items/Items';
import './ManageInventory.css'
import { useParams } from 'react-router-dom'




const ManageInventory = () => {
      const { itemsId } = useParams();

      const [items, setItems] = useItems();

      const handleDelet = id => {
            const proceed = window.confirm('Are you sure')
            if (proceed) {
                  const url = `https://morning-retreat-32116.herokuapp.com/items/${id}`
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
            <div >
                  <Items></Items>
                  <div className='w-50 mx-auto'>
                        {
                              items.map(item => <div key={item._id}>

                                    <h4 >{item.name} <button onClick={() => handleDelet(item._id)}><span className='btn btn-danger'>Delet</span></button></h4>
                              </div>)
                        }
                  </div>
                  <div className='delet-button'>
                        <button className='btn btn-danger w-25'>Deleted</button>
                  </div>
                  <div className='additemss-section '>
                        <button className='btn btn-success w-25 '><Link className='text-decoration-none' to='/AddItem'><span >Add New Item</span></Link></button>
                  </div>

            </div>
      );
};

export default ManageInventory;