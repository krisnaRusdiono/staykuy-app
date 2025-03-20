import { useRouter } from 'next/navigation';
import { useState } from 'react';
import formatCurrency from '@/helpers/formatCurrency';

const useSearchResult = () => {
  const router = useRouter();
  const [valuePrice, setValuePrice] = useState<number[]>([200000, 90000000]);

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
    router.push('/detail/hotel-id');
  };

  return {
    valuePrice,
    handleValuePriceChange,
    renderValuePrice,
    priceLabelFormat,
    handleClickDetail,
  };
};

export default useSearchResult;
