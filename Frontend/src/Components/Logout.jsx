import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
  const [authUser, setAuthUser]= useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      setAuthUser(null);
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
      setTimeout(()=>{
        window.location.reload();

      },2000);

      navigate('/'); // Redirect to home page or login page
    } catch (error) {
      toast.error("Error: " + error.message);
      setInterval(()=>{},2000);
    }
  };

  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
