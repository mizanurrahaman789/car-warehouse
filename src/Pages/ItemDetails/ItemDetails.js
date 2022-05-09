import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetails = () => {
      const { restockId } = useParams();
      return (
            <div>
                  <h1>Item Detail {restockId}</h1>
                  <div className='text-center'>
                        <Link to='/checkout'>
                              <button className='btn btn-primary '>process checkout</button>
                        </Link>
                  </div>
            </div>
      );
};

export default ItemDetails;