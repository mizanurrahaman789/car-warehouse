import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {

      const { name, id, phone, email } = item;

      const navigate = useNavigate();
      const navigateToItemDetails = id => {
            navigate(`/item/${id}`);
      }
      return (
            <div className='container'>
                  <div className='row'>
                        <div className='item-section'>
                              <h1>Name {name}</h1>
                              <h2>Email {email}</h2>
                              <h4>Phone {phone}</h4>
                              <h4>Id {id}</h4>
                              <button onClick={() => navigateToItemDetails(id)}>updta info</button>
                        </div>
                  </div>
            </div>
      );
};

export default Item;