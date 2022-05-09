import React from 'react';
import './SocialLogin.css'
import google from '../../../image/social/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
      const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
      const navigate = useNavigate();
      let errorElement;
      if (loading) {
            return <Loading></Loading>
      }
      if (error) {
            errorElement = <p className='text-danger'>Error: {error?.message}</p>
      }

      if (user) {
            navigate('/home')
      }


      return (
            <div>
                  <div className='d-flex align-items-center'>
                        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                        <p className='mt-2 px-2'>or</p>
                        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                  </div>
                  {errorElement}
                  <div >
                        <button
                              onClick={() => signInWithGoogle()}
                              className='btn btn-dark w-50 d-block mx-auto'>
                              <img style={{ width: '30px' }} src={google} alt=''></img>
                              <span className='px-5'>Google Sign In</span>
                        </button>
                  </div>
            </div>
      );
};

export default SocialLogin;