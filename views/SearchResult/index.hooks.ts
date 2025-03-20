import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import formatCurrency from '@/helpers/formatCurrency';
import { HomeSchema } from '../Home/index.types';
import createQueryParams from '@/utils/createQueryParams';

const useSearchResult = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [initialParams, setInitialParams] = useState<HomeSchema>();
  const [valuePrice, setValuePrice] = useState<number[]>([20000000, 80000000]);
  const [expandFilterFacility, setExpandFilterFacility] = useState<boolean>(false);

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
  };
};

export default useSearchResult;
