import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast: React.FC = () => {
  return <ToastContainer position="bottom-right" autoClose={5000} />;
};

export default Toast;
