import formatDateShort from '@/helpers/formatDateShort';
import createQueryParams from '@/utils/createQueryParams';
import { HomeSchema } from '@/views/Home/index.types';
import { Typography, Divider, Button } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const DetailSearch = () => {
    const router = useRouter();
    const params = useSearchParams();
    const [initialParams, setInitialParams] = useState<HomeSchema>()

    const changeSearchQuery = () => {
        if (initialParams) router.push(`/?${createQueryParams(initialParams)}`);
    }

    useEffect(() => {
        const res: HomeSchema = Object.fromEntries(params.entries()) as unknown as HomeSchema;
        setInitialParams(res);
    }, [params])

    const {
        city = '-',
        startDate = '',
        endDate = '',
        guest = '0',
        room = '0',
    } = initialParams || {};
    
    return (
      <div className='w-full bg-white rounded-md flex justify-between items-center gap-4 px-4 py-6 drop-shadow-lg border border-solid border-neutral-100'>
        <div className='w-full flex gap-4'>
          <div className='flex flex-col justify-between h-inherit'>
            <Typography variant='body2'>Kota/Nama Hotel/ Destinasi</Typography>
            <Typography variant='body1' className='!font-semibold'>
              {city}
            </Typography>
          </div>
          <Divider orientation='vertical' variant='middle' flexItem />
          <div className='flex flex-col justify-between h-inherit'>
            <Typography variant='body2'>Tanggal Menginap</Typography>
            <Typography variant='body1' className='!font-semibold'>
              {`${startDate ? formatDateShort(new Date(startDate)) : '-'} - ${
                endDate ? formatDateShort(new Date(endDate)) : '-'
              }`}
            </Typography>
          </div>
          <Divider orientation='vertical' variant='middle' flexItem />
          <div className='flex flex-col justify-between h-inherit'>
            <Typography variant='body2'>Jumlah Tamu dan Kamar</Typography>
            <Typography variant='body1' className='!font-semibold'>
              {`${guest} Tamu - ${room} Kamar`}
            </Typography>
          </div>
        </div>
        <Button
          variant='contained'
          className='text-sm !normal-case text-nowrap !px-8 !py-2 !rounded-xl'
          onClick={changeSearchQuery}
        >
          Ubah Pencarian
        </Button>
      </div>
    );
}

export default DetailSearch;
