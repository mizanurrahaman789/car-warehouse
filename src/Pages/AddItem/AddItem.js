import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
      const { register, handleSubmit, watch, formState: { errors } } = useForm();
      const onSubmit = data => {
            console.log(data);
            const url = `http://localhost:5000/items`
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
                  <h1>Add Item</h1>
                  <div className='w-50 mx-auto '>
                        <form className='d-flex flex-column text-center' onSubmit={handleSubmit(onSubmit)}>

                              <input className='mb-2' placeholder='Name'  {...register("nmae")} />
                              <textarea className='mb-2' placeholder='descreption'  {...register("descreption")} />


                              <input className='mb-2' placeholder='price' type='price'{...register("price")} />
                              <input className='mb-2' placeholder='Photo URL' type='text' {...register('img')} />


                              <input type="submit" value='Add items' />
                        </form>
                  </div>
            </div>
      );
};

export default AddItem;