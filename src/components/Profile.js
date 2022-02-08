import React from 'react';
import { useAuth } from './Auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate('/');
  }
  return (
    <>
      <div>Welcome {auth.user}</div>
      <button onClick={handleLogout}>Log out</button>
    </>

  );
};

export default Profile;