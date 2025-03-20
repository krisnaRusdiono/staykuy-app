import { useRouter, useSearchParams } from 'next/navigation';
import createQueryParams from '@/utils/createQueryParams';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import homeSchema from './index.schemas';
import { HomeSchema } from './index.types';

const useHome = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [openHistory, setOpenHistory] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    watch,
    reset,
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

  useEffect(() => {
    const res: HomeSchema = Object.fromEntries(
      params.entries()
    ) as unknown as HomeSchema;
    const { startDate, endDate } = res || {}
    const patchObj = {
      ...res,
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
    };
    reset(patchObj)
  }, [params, reset]);

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
