import { redirect } from 'react-router-dom';

export function action() {
  localStorage.removeItem('access-token');
  localStorage.removeItem('access-token-expiration');
  return redirect('/');
}
