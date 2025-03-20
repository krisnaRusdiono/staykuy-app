import { useRouter } from 'next/navigation';
import createQueryParams from '@/utils/createQueryParams';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import homeSchema from './index.schemas';
import { HomeSchema } from './index.types';

const useHome = () => {
  const router = useRouter();
  const [openHistory, setOpenHistory] = useState<boolean>(false);

  const {
      control,
      handleSubmit,
      watch,
    } = useForm<HomeSchema>({
      resolver: zodResolver(homeSchema),
      defaultValues: {
        city: '',
        startDate: null,
        endDate: null,
        guest: '0',
        room: '0',
      }
    })

  const toggleOpenHistory = () => setOpenHistory(!openHistory);

  const onSubmit = (data: HomeSchema) => {
    const queryString = createQueryParams(data);
    router.push(`search-result?${queryString}`);
  };

  return {
    toggleOpenHistory,
    openHistory,
    control,
    handleSubmit,
    watch,
    onSubmit,
  };
};

export default useHome;
