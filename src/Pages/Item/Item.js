import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {

      const { name, _id, img, price, supplierName } = item;
      console.log(name)

      const navigate = useNavigate();
      const navigateToItemDetails = id => {
            navigate(`/inventory/${id}`);
      }
      return (

            <div className='gx-5 col-sm-12 col-md-6 col-lg-4 mb-5'>
                  <div className="card border-redius-10" style={{
                        width: "18rem"
                  }}>
                        <img className="card-img-top" src={img} alt="" />
                        <div className="card-body">
                              <h5 className="card-title">Nmae :{name}</h5>
                              <h5 className="card-title">Price :$ {price}</h5>
                              <h5 className="card-title">supplierName : {supplierName}</h5>
                              <button onClick={() => navigateToItemDetails(_id)}>Update Now</button>
                        </div>
                  </div>
            </div>

      );
};

export default Item;