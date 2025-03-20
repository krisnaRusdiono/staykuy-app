import { BASE_APP } from '@/constants/config';

const fetcher = async ({ endpoint, method = 'GET' }: { endpoint: string, method?: 'GET' | 'POST' }) => {
  const response = await fetch(`${BASE_APP}${endpoint}`, { method });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export default fetcher;