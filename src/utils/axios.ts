import axios from 'axios';

const isServer = typeof window === 'undefined';

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

function createAxiosClientWithToken() {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

  client.interceptors.request.use(async (config) => {
    if (isServer) {
      const { cookies } = (await import('next/headers'));
      const token = cookies().get('your-token-name')?.value;
      if (token) config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)your-token-name\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  })

  return client;
}

export const axiosWithToken = createAxiosClientWithToken();