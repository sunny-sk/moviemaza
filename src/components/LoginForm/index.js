import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginAction } from '../../actions/auth';
import { login } from '../../lib/fetch';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const onSubmitHandler = async (formData) => {
    setIsLoading(true);
    const { res, error, message } = await login(formData);
    setIsLoading(false);
    if (error) {
      setError(message);
    } else {
      const redirect = router.query['redirect'];
      dispatch(loginAction(res.user));
      if (redirect) {
        router.replace(redirect);
      } else {
        router.replace('/');
      }
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please Enter Email');
      return;
    } else if (!password) {
      setError('Please Enter password');
      return;
    }
    // validate email
    // check for valid email
    // check for email exitence
    //password length
    onSubmitHandler({ email, password });
  };

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        setError(undefined);
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  return (
    <div className="container">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We will never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter Password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-danger ml-2">
          Reset
        </button>
      </form>
      <br />
      <br />
      <div>
        <center>
          <p>
            Do not have an account ?<Link href="/register">Register here</Link>
          </p>
          or
          <br />
          <Link href="/forgot-password">Forgot Password ?</Link>
        </center>
      </div>
    </div>
  );
};

export default LoginForm;
