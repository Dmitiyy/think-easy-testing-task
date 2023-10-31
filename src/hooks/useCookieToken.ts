import Cookies from 'js-cookie';

export const useCookieToken = () => {
  const saveTokenData = (
    accessToken: string, refreshToken: string
  ) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30)

    Cookies.set('accessToken', accessToken, { expires: expirationDate });
    Cookies.set('refreshToken', refreshToken, { expires: expirationDate });
  }

  const removeTokenData = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
  }

  return { saveTokenData, removeTokenData };
}