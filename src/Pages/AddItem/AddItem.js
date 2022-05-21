import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddItem.css'

const AddItem = () => {
      const { register, handleSubmit, watch, formState: { errors } } = useForm();
      const onSubmit = data => {
            console.log(data);
            const url = `https://morning-retreat-32116.herokuapp.com/items`
            fetch(url, {
                  method: 'POST',
                  headers: {
                        'content-type': 'aplication/json'
                  },
                  body: JSON.stringify(data)


            })
                  .then(res => res.json())
                  .then(result => {
                        console.log(result)
                  })
      };
      return (
            <div>
                  <h1 className='add-items'>Add Item</h1>
                  <div className='w-50 mx-auto add-section'>
                        <form className='d-flex flex-column text-center ' onSubmit={handleSubmit(onSubmit)}>

                              <input className='mb-2' placeholder='Name'  {...register("name")} />
                              <textarea className='mb-2' placeholder='descreption'  {...register("descreption")} />
                              <input className='mb-2' placeholder='supplierName'  {...register("supplierName")} />
                              <input className='mb-2' type="number" placeholder='phone'  {...register("number")} />
                              <input className='mb-2' type="Email" placeholder='email'  {...register("email")} />
                              <input className='mb-2' type="number" placeholder='quantity'  {...register("quantity")} />


                              <input className='mb-2' type="number" placeholder='price' {...register("price")} />
                              <input className='mb-2' placeholder='Photo URL' type='text' {...register('img')} />


                              <Link to='/MyItems'><input type="submit" value='Add items' /></Link>
                        </form>
                  </div>
            </div>
      );
};

export default AddItem;