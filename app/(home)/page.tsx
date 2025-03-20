import Home from '@/views/Home';
import { Suspense } from 'react';

const HomePage = () => (
  <Suspense fallback={<div>Loading</div>}>
    <Home />
  </Suspense>
);
export default HomePage;