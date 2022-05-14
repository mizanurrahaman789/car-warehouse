import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetails = () => {
      const { itemsId } = useParams();
      const [items, setItems] = useState({});
      useEffect(() => {
            const url = `http://localhost:5000/items/${itemsId}`
            console.log(url)
            fetch(url)
                  .then(res => res.json())
                  .then(data => setItems(data))
      }, []);
      return (
            <div>
                  <img className='w-30' src={items.img} alt=""></img>
                  <h1>CarBrands: {items.name}</h1>
                  <h5>Price: {items.price}</h5>
                  <h5>Quantity: {items.quantity}</h5>
                  <h5>Price: {items.price}</h5>
                  <h4>supplierName: {items.suppliername}</h4>
                  <h6>Phone: {items.phone}</h6>
                  <h6>Email: {items.email}</h6>
                  <p></p>

                  <div className='text-center'>
                        <Link to='/manageinventory'>
                              <button className='btn btn-primary '>
                                    Manage Inventory
                              </button>
                        </Link>
                  </div>
            </div>
      );
};

export default ItemDetails;