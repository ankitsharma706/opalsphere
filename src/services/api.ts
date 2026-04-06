import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  withCredentials: true
});

export const authApi = {
  signup: (data: any) => api.post('/auth/signup', data),
  login: (data: any) => api.post('/auth/login', data),
  googleLogin: (token: string) => api.post('/auth/google', { token }),
  logout: () => api.post('/auth/logout'),
  me: () => api.get('/auth/me')
};

export const cartApi = {
  get: () => api.get('/cart'),
  add: (productId: string, quantity?: number) => api.post('/cart/add', { productId, quantity }),
  update: (productId: string, quantity: number) => api.put('/cart/update', { productId, quantity }),
  remove: (productId: string) => api.delete(`/cart/remove/${productId}`)
};

export const wishlistApi = {
  get: () => api.get('/wishlist'),
  add: (productId: string) => api.post('/wishlist/add', { productId }),
  remove: (productId: string) => api.delete(`/wishlist/remove/${productId}`)
};

export const bookingApi = {
  create: (data: any) => api.post('/booking/create', data),
  getUserBookings: () => api.get('/booking/user'),
  cancel: (id: string) => api.delete(`/booking/cancel/${id}`)
};

export const orderApi = {
  create: (data: any) => api.post('/order/create', data),
  getUserOrders: () => api.get('/order/user')
};

export default api;
