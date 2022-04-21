import { toast } from 'react-toastify';

export const showToast = (type, message) => {
  const commonProps = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const toastTypes = {
    error: () => toast.error(message, commonProps),
    success: () => toast.success(message, commonProps),
  };
  toastTypes[type]();
};
