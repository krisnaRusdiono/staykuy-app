import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import formatCurrency from '@/helpers/formatCurrency';
import { HomeSchema } from '../Home/index.types';
import createQueryParams from '@/utils/createQueryParams';
import { ENDPOINT_LOCAL_API } from '@/constants/endpoint';
import fetcher from '@/lib/fetcher';
import { useQuery } from '@tanstack/react-query';

const useSearchResult = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [initialParams, setInitialParams] = useState<HomeSchema>();
  const [valuePrice, setValuePrice] = useState<number[]>([20000000, 80000000]);
  const [expandFilterFacility, setExpandFilterFacility] = useState<boolean>(false);
  const { HOTEL_SEARCH } = ENDPOINT_LOCAL_API;
  const [stars, setStars] = useState<number[]>([]);

  const { data: response, isLoading } = useQuery({
    queryKey: ['getCity', createQueryParams({ ...initialParams })],
    queryFn: () => fetcher({ endpoint: HOTEL_SEARCH(createQueryParams({ ...initialParams })) }),
    enabled: !!initialParams,
  });

  const toggleExpandFilterFacility = () => setExpandFilterFacility(!expandFilterFacility);

  const handleValuePriceChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setValuePrice(newValue as number[]);
  };

  const renderValuePrice = (value: number) => {
    return `Rp.${value}`;
  };

  const priceLabelFormat = (value: number) => {
    return `IDR ${formatCurrency(value)}`;
  };

  const handleClickDetail = () => {
    router.push(`/detail/hotel-id?${createQueryParams(initialParams || {})}`);
  };

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { checked, value } = target;
    const currentStars = stars;
    if (checked) {
      currentStars.push(Number(value));
    } else {
      const idx = currentStars.findIndex((item) => item === Number(value))
      currentStars.splice(idx, 1)
    }

    setStars(currentStars);
    setInitialParams({ ...initialParams, stars: currentStars })
  }

  useEffect(() => {
    const res: HomeSchema = Object.fromEntries(
      params.entries()
    ) as unknown as HomeSchema;
    const { startDate, endDate } = res || {};
    const patchObj = {
      ...res,
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
    };
    setInitialParams(patchObj);
  }, [params]);

  return {
    valuePrice,
    handleValuePriceChange,
    renderValuePrice,
    priceLabelFormat,
    handleClickDetail,
    initialParams,
    expandFilterFacility,
    toggleExpandFilterFacility,
    response,
    isLoading,
    onCheckboxChange,
    stars,
  };
};

export default useSearchResult;
