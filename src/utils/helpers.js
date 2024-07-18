import Cookies from 'js-cookie';

export function decodeJWT(token) {
  if (!token) return null;
  const payload = token.split('.')[1];
  const decoded = atob(payload);
  return JSON.parse(decoded);
}

export function getTokenCookie() {
  const cookieName = import.meta.env.VITE_COOKIE_NAME;
  if (!cookieName) return null;
  return Cookies.get(cookieName);
}

export function setTokenCookie(token) {
  const cookieName = import.meta.env.VITE_COOKIE_NAME;
  if (!cookieName) throw Error('Cookie name is not defined');
  Cookies.set(cookieName, token, { expires: 7 });
}

export function removeTokenCookie() {
  const cookieName = import.meta.env.VITE_COOKIE_NAME;
  if (!cookieName) throw Error('Cookie name is not defined');
  Cookies.remove(cookieName);
}

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}
