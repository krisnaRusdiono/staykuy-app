import { useRouter, useSearchParams } from 'next/navigation';
import createQueryParams from '@/utils/createQueryParams';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import homeSchema from './index.schemas';
import { HomeSchema } from './index.types';
import fetcher from '@/lib/fetcher';
import { ENDPOINT_LOCAL_API } from '@/constants/endpoint';
import { useQuery } from '@tanstack/react-query';

const useHome = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [openHistory, setOpenHistory] = useState<boolean>(false);
  const { CITY } = ENDPOINT_LOCAL_API;

  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
  } = useForm<HomeSchema>({
    resolver: zodResolver(homeSchema),
    defaultValues: {
      city: 0,
      startDate: null,
      endDate: null,
      guest: '1',
      room: '1',
    }
  })

  const toggleOpenHistory = () => setOpenHistory(!openHistory);

  const onSubmit = (data: HomeSchema) => {
    const { startDate, endDate, guest, room, city } = data || {};
    if (!city) {
      alert('Kota wajib diisi');
      return;
    }
    if (!startDate || !endDate || !guest || !room) {
      alert(`${!guest || !room ? 'Jumlah Tamu' : 'Tanggal'} wajib diisi`);
      return;
    }
    const queryString = createQueryParams(data);
    router.push(`search-result?${queryString}`);
  };

  const {
    data: response,
    isLoading,
  } = useQuery({
    queryKey: ['getCity'],
    queryFn: () => fetcher({ endpoint: CITY }),
  });

  useEffect(() => {
    const res: HomeSchema = Object.fromEntries(
      params.entries()
    ) as unknown as HomeSchema;
    const { startDate, endDate } = res || {}
    const patchObj = {
      ...res,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
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
    response,
    isLoading,
    setValue,
  };
};

export default useHome;
