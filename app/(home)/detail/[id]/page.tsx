import Detail from '@/views/Detail';
import { Suspense } from 'react';

const DetailPage = () => (
  <Suspense fallback={<div>Loading</div>}>
    <Detail />
  </Suspense>
)

export default DetailPage;
