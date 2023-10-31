import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useCookieToken } from "./useCookieToken";
import { useToken } from "./useToken";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useAuthFunc = <TPayload>(url: string) => {
  const { saveTokenData } = useCookieToken();
  const navigate = useNavigate();
  const { token } = useToken();
  
  const { mutate, data, isError, isPending } = useMutation({
    mutationFn: (payload: TPayload) => {
      return axios.post(
        `${process.env.REACT_APP_REQUEST_URL}/auth/${url}`, 
        payload 
      )
    }
  });

  useEffect(() => {
    if (token && token.length !== 0) {
      navigate('/');
    }
  }, [token])

  useEffect(() => {
    if (data && data.status === 201) {
      const { accessToken, refreshToken } = data.data;
      saveTokenData(accessToken, refreshToken);
      navigate('/');
    }
  }, [data])

  const onSubmit = (values: any) => {
    mutate(values);
  }

  return { onSubmit, isError, isPending };
}