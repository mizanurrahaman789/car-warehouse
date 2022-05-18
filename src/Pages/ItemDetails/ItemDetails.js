import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import './ItemDetails.css'

const ItemDetails = () => {
      const { itemsId } = useParams();
      const [items, setItems] = useState({});
      console.log(items);
      useEffect(() => {
            const url = `http://localhost:5000/items/${itemsId}`

            fetch(url)
                  .then(res => res.json())
                  .then(data => setItems(data))
      }, []);
      const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = data => {
            console.log(data)
      }
      console.log(errors);
      return (
            <div className='text-center'>
                  <div className='items-detailss mx-auto'>
                        <div className='text-center'>
                              <img className='w-30 ' src={items.img} alt=""></img>
                        </div>
                        <div className='text-area'>
                              <h1>CarBrands: {items.name}</h1>
                              <h4>ID: {items._id}</h4>
                              <h5>Quantity: {items.quantity}</h5>
                              <h5>Price: {items.price}</h5>
                              <h6>Phone: {items.phone}</h6>
                              <h5>supplierName{items.supplierName}</h5>
                              <h6>description: <small>{items.description}</small> </h6>
                        </div>

                  </div>
                  <div className='mb-10'>
                        <button className='btn btn-success text-center w-25'>Delivered</button>
                  </div>

                  <div className='mx-auto quantity-text'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                              <input className='w-25' type="number" placeholder="quantity" {...register("quantity", { required: true })} />

                              <div className='mt-2'>
                                    <input className='btn btn-danger w-25' type="submit" />
                              </div>
                        </form>
                  </div>

                  <div className=' manageinventory'>
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