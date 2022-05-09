import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
      const emailRef = useRef('');
      const passwordRef = useRef('');
      const navigate = useNavigate();
      const location = useLocation();

      let errorElement
      let from = location.state?.from?.pathname || "/";

      const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if (user) {
            navigate(from, { replace: true });
      }

      if (error) {
            errorElement = <p className='text-danger'>Error: {error?.message}</p>
      }

      const handleSubmit = event => {
            event.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            // console.log(email, password);
            signInWithEmailAndPassword(email, password)
      }
      const navigateRegister = event => {
            navigate('/register')
      }
      const resetPassword = async () => {
            const email = emailRef.current.value;
            if (email) {
                  await sendPasswordResetEmail(email);
                  toast('Sent email');
            }
            else {
                  toast('please enter your email addres')
            }
      }

      return (
            <div className='container w-50 mx-auto'>
                  <h1 className='text-primary text-center mt-2'>Please login</h1>

                  <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                              <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">

                              <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                              Login
                        </Button>
                  </Form>
                  {errorElement}
                  <p className='text-center'>Create an account? <Link to='/register' onClick={navigateRegister} className='text-primary pe-auto text-decoration-none' > Please Register </Link> </p>
                  <p className='text-center'>Forget Password <button onClick={resetPassword} className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Password</button> </p>
                  <SocialLogin></SocialLogin>
                  <ToastContainer />
            </div >
      );
};

export default Login;