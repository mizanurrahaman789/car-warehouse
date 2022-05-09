import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Loading/Loading';


const Register = () => {

      const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const navigate = useNavigate();


      const navigateLogin = event => {
            navigate('/Login')
      }
      if (loading || updating) {
            return <Loading></Loading>
      }
      if (user) {
            console.log('user', user)
      }

      const handleRegister = async (event) => {
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const password = event.target.password.value;

            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name });
            console.log('Updated profile');
            navigate('/home');
      }
      return (
            <div className='register-form'>
                  <h1 className='text-center'>Register</h1>
                  <form onSubmit={handleRegister}>
                        <input type="text" name="name" id="" placeholder='your name' required></input>

                        <input type="email" name="email" id="" placeholder='your email' required></input>

                        <input type="password" name="password" id="" placeholder='your password' required></input>
                        <input type='checkbox' name='trems' id='trems'></input>
                        <label htmlFor='trems'>Accept Trems and Condition</label>
                        <input className='w-50 mx-auto btn btn-primary mt-3' type="submit" value="Register"></input>
                  </form>
                  <p className='text-center'>Allredy have an account? <Link to='/login' onClick={navigateLogin} className='text-primary pe-auto text-decoration-none' > please login </Link> </p>
                  <SocialLogin></SocialLogin>
            </div>
      );
};

export default Register;