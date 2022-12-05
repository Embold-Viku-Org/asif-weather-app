import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const popups = (msg) => {
    toast.success(msg, {
      position: "top-center",
      className: 'toast-message',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
function Toast(){
  const notify = () => {
    toast.success('city added', {
      position: "top-center",
      className: 'toast-message',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default Toast;