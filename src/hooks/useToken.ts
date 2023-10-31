import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

export const useToken = () => {
  const [cookieValues, setCookieValues] = useState<{
    token: string, 
    refreshToken: string
  }>({
    token: '',
    refreshToken: ''
  });
  
  useEffect(() => {
    // Retrieving the values from cookies
    const token = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');
    // Checking if the values exist and update the state
    if (token && refreshToken) {
      setCookieValues({
        token,
        refreshToken
      });
    }
  }, []);

  return cookieValues;
}