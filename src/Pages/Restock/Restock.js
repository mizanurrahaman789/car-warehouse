import React from 'react';
import { Link } from 'react-router-dom';


const Restock = ({ restock }) => {
      const { name, img, price } = restock;



      return (
            <div className='gx-5 col-sm-12 col-md-6 col-lg-4 mb-5'>
                  <div className="card border-redius-10" style={{
                        width: "18rem"
                  }}>
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body">
                              <h5 className="card-title">{name}</h5>
                              <h5 className="card-title">{price}</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                              <Link to='/inventory'><a href="#" className="btn btn-primary">Up Dating</a></Link>
                        </div>
                  </div>
            </div>

      );
};

export default Restock;