/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logoutAction } from '@/actions/auth';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
const Layout = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    dispatch(logoutAction());
  };
  return (
    <>
      <NavBar />
      <br />
      <br />
      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
