import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {

      const { name, _id, phone, email, img, price } = item;

      const navigate = useNavigate();
      const navigateToItemDetails = id => {
            navigate(`/inventory/${id}`);
      }
      return (

            <div className='gx-5 col-sm-12 col-md-6 col-lg-4 mb-5'>
                  <div className="card border-redius-10" style={{
                        width: "18rem"
                  }}>
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body">
                              <h5 className="card-title">Nmae :{name}</h5>
                              <h5 className="card-title">Price :$ {price}</h5>
                              <h5 className="card-title">Email: {email}</h5>
                              <h5 className="card-title">Phone: {phone}</h5>

                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                              <button onClick={() => navigateToItemDetails(_id)}>Update Now</button>
                        </div>
                  </div>
            </div>

      );
};

export default Item;