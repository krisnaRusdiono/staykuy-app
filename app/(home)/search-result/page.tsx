import SearchResult from '@/views/SearchResult';
import { Suspense } from 'react';

const SearchResultPage = () => (
  <Suspense fallback={<div>Loading</div>}>
    <SearchResult />
  </Suspense>
)

export default SearchResultPage;
