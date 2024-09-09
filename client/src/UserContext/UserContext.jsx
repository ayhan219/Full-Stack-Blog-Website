import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const [search,setSearch] = useState("");
  const [darkMode,setIsDarkMode] = useState(false)

  const login = () => {
    navigate("/")
    window.location.reload();
    
  };

  const logout = async () => {
    setUser(null);
    try {
      await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/me', {
          withCredentials: true,
        });
        setUser(response.data.user);
        
        
        
      } catch (error) {
        console.error('User is not authenticated');
        setUser(null);
      } 
    };

    checkAuth();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout,setSearch,search,darkMode,setIsDarkMode }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
