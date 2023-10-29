import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

export const useToken = () => {
  const [cookieValues, setCookieValues] = useState<{
    token: string, 
    refreshToken: string,
    id: string
  }>({
    token: '',
    refreshToken: '',
    id: '',
  });
  
  useEffect(() => {
    // Retrieving the values from cookies
    const token = Cookies.get('token');
    const refreshToken = Cookies.get('refreshToken');
    const id = Cookies.get('id');

    // Checking if the values exist and update the state
    if (token && refreshToken && id) {
      setCookieValues({
        token,
        refreshToken,
        id,
      });
    }
  }, []);

  return cookieValues;
}