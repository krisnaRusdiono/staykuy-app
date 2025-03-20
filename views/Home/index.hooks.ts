import { useRouter } from 'next/navigation';
import formatDate from '@/helpers/formatDate';
import createQueryParams from '@/utils/createQueryParams';
import { useState } from 'react';

const useHome = () => {
  const router = useRouter();
  const [openHistory, setOpenHistory] = useState<boolean>(false);

  const toggleOpenHistory = () => setOpenHistory(!openHistory);

  const onClickSearch = () => {
    const queryString = createQueryParams({
      destination: 'bandung',
      date: formatDate(new Date()),
      visitor: 4,
    });
    router.push(`search-result?${queryString}`);
  };

  return {
    onClickSearch,
    toggleOpenHistory,
    openHistory,
  };
};

export default useHome;
