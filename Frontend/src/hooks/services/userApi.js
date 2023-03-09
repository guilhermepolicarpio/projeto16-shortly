import api from './api';

export async function signUp(username, email, password) {
  const response = await api.post('/signup', { username, email, password });

  return response.data;
}

export async function signIn(email, password) {
  const response = await api.post('/user/sign-in', { email, password });
  return response.data;
}