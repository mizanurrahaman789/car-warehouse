import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import Items from '../Items/Items';
import Restocks from '../Restocks/Restocks';
// import { useForm } from "react-hook-form";


const Inventory = () => {
      // const { register, handleSubmit, watch, formState: { errors } } = useForm();
      // const onSubmit = data => {
      //       console.log(data);
      //       const url = `http://localhost:5000/items`
      //       fetch(url, {
      //             method: 'POST',
      //             headers: {
      //                   'content-type': 'aplication/json'
      //             },
      //             body: JSON.stringify(data)

      //       })
      //             .then(res => res.json())
      //             .then(result => {
      //                   console.log(result)
      //             })
      // };
      return (
            <div className='text-center'>
                  <Items></Items>
                  <Restocks></Restocks>
                  <div>
                        <button className='btn btn-success text-center w-25'>Delivered</button>
                  </div>
                  <br />



                  {/* <div className='w-50 mx-auto '>
                        <form className='d-flex flex-column text-center' onSubmit={handleSubmit(onSubmit)}>

                              <input className='mb-2' placeholder='Name'  {...register("nmae")} />
                              <textarea className='mb-2' placeholder='descreption'  {...register("descreption")} />


                              <input className='mb-2' placeholder='price' type='price'{...register("price")} />
                              <input className='mb-2' placeholder='Photo URL' type='text' {...register('img')} />


                              <input type="submit" value='Add items' />
                        </form>
                  </div> */}



                  <div>
                        <input className='w-25' type="input" name="text" id="" placeholder='quintity'></input>
                        <br />
                        <button className='btn btn-danger w-25 mt-2'>Add Item</button>
                  </div>

            </div>
      );
};

export default Inventory;