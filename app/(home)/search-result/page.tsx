'use client'

import AppContainer from '@/components/base/AppContainer';
import { Button, Checkbox, Divider, Slider, Typography } from '@mui/material';
import starIcon from '@/public/svg/star.svg';
import Image from 'next/image';
import { useState } from 'react';
import formatCurrency from '@/helpers/formatCurrency';
import pinMarker from '@/public/svg/pinMarker.svg';
import icGym from '@/public/svg/ic_gym.svg';
import icLaundry from '@/public/svg/ic_laundry.svg';
import icReceptionist from '@/public/svg/ic_receptionist.svg';
import icSpa from '@/public/svg/ic_spa.svg';
import icSwimmingPool from '@/public/svg/ic_swimming_pool.svg';
import { useRouter } from 'next/navigation';

const SearchResultPage = () => {
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
    }

    const priceLabelFormat = (value: number) => {
        return `IDR ${formatCurrency(value)}`;
    }

    const handleClickDetail = () => {
      router.push('/detail/hotel-id')
    }

    return (
      <AppContainer className='flex flex-col gap-4 py-4'>
        <div className='flex flex-col gap-8 h-auto min-h-screen pt-20'>
          <div className='w-full bg-white rounded-md flex justify-between items-center gap-4 px-4 py-6 drop-shadow-lg border border-solid border-neutral-100'>
            <div className='w-full flex gap-4'>
              <div className='flex flex-col justify-between h-inherit'>
                <Typography variant='body2'>
                  Kota/Nama Hotel/ Destinasi
                </Typography>
                <Typography variant='body1' className='!font-semibold'>
                  Jakarta
                </Typography>
              </div>
              <Divider orientation='vertical' variant='middle' flexItem />
              <div className='flex flex-col justify-between h-inherit'>
                <Typography variant='body2'>Tanggal Menginap</Typography>
                <Typography variant='body1' className='!font-semibold'>
                  12 Mar - 14 Mar 2025
                </Typography>
              </div>
              <Divider orientation='vertical' variant='middle' flexItem />
              <div className='flex flex-col justify-between h-inherit'>
                <Typography variant='body2'>Jumlah Tamu dan Kamar</Typography>
                <Typography variant='body1' className='!font-semibold'>
                  2 Tamu 2 Kamar
                </Typography>
              </div>
            </div>
            <Button
              variant='contained'
              className='text-sm !normal-case text-nowrap !px-8 !py-2 !rounded-xl'
            >
              Ubah Pencarian
            </Button>
          </div>
          <div className='flex gap-8'>
            <div className='min-w-72 rounded-xl drop-shadow-lg p-4 bg-white flex flex-col gap-4 h-fit'>
              <Typography>Filter Pencarian</Typography>
              <div>
                <Typography>Bintang Hotel</Typography>
                <div className='flex gap-2'>
                  <Checkbox value={1} classes={{ root: '!px-0 !py-1' }} />
                  <div className='flex gap-2'>
                    <Image src={starIcon} width={17} alt='star' />
                  </div>
                </div>
                <div className='flex gap-2'>
                  <Checkbox value={2} classes={{ root: '!px-0 !py-1' }} />
                  <div className='flex gap-2'>
                    <Image src={starIcon} width={17} alt='star' />
                    <Image src={starIcon} width={17} alt='star' />
                  </div>
                </div>
                <div className='flex gap-2'>
                  <Checkbox value={3} classes={{ root: '!px-0 !py-1' }} />
                  <div className='flex gap-2'>
                    <Image src={starIcon} width={17} alt='star' />
                    <Image src={starIcon} width={17} alt='star' />
                    <Image src={starIcon} width={17} alt='star' />
                  </div>
                </div>
                <div className='flex gap-2'>
                  <Checkbox value={4} classes={{ root: '!px-0 !py-1' }} />
                  <div className='flex gap-2'>
                    <Image src={starIcon} width={17} alt='star' />
                    <Image src={starIcon} width={17} alt='star' />
                    <Image src={starIcon} width={17} alt='star' />
                    <Image src={starIcon} width={17} alt='star' />
                  </div>
                </div>
                <div className='flex gap-2'>
                  <Checkbox value={5} classes={{ root: '!px-0 !py-1' }} />
                  <div className='flex gap-2'>
                    <Image src={starIcon} width={17} alt='star' />
                    <Image src={starIcon} width={17} alt='star' />
                    <Image src={starIcon} width={17} alt='star' />
                    <Image src={starIcon} width={17} alt='star' />
                    <Image src={starIcon} width={17} alt='star' />
                  </div>
                </div>
              </div>
              <Divider />
              <Typography>Filter Pencarian</Typography>
              <div>
                <div className='flex gap-2'>
                  <Checkbox value={5} classes={{ root: '!px-0 !py-1' }} />
                  <Typography>Kolam Renang</Typography>
                </div>
                <div className='flex gap-2'>
                  <Checkbox value={5} classes={{ root: '!px-0 !py-1' }} />
                  <Typography>Parkir Gratis</Typography>
                </div>
                <div className='flex gap-2'>
                  <Checkbox value={5} classes={{ root: '!px-0 !py-1' }} />
                  <Typography>Pusat Kebugaran</Typography>
                </div>
                <div className='flex gap-2'>
                  <Checkbox value={5} classes={{ root: '!px-0 !py-1' }} />
                  <Typography>SPA</Typography>
                </div>
                <div className='flex gap-2'>
                  <Checkbox value={5} classes={{ root: '!px-0 !py-1' }} />
                  <Typography>Cuci Gratis</Typography>
                </div>
                <Button variant='text' className='!p-0'>
                  + Tampilkan lebih banyak
                </Button>
              </div>
              <Divider />
              <div>
                <Typography>Harga</Typography>
                <Slider
                  getAriaLabel={() => 'Temperature range'}
                  min={100000}
                  max={100000000}
                  step={100000}
                  value={valuePrice}
                  onChange={handleValuePriceChange}
                  valueLabelDisplay='auto'
                  getAriaValueText={renderValuePrice}
                  valueLabelFormat={priceLabelFormat}
                />
                <div className='flex justify-between'>
                  <Typography variant='body2'>IDR 100K</Typography>
                  <Typography variant='body2'>IDR 100JT</Typography>
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col gap-8'>
              <div className='flex items-baseline gap-2'>
                <Typography variant='h6' className='!font-semibold'>
                  Hasil Pencarian
                </Typography>
                <Typography
                  variant='caption'
                  color='textDisabled'
                  className='italic'
                >
                  9999 Hotel Ditemukan
                </Typography>
              </div>
              <div className='flex gap-4 flex-col'>
                {new Array(8).fill(null).map((_, i) => (
                  <div
                    key={i}
                    className='flex gap-6 bg-white rounded-2xl drop-shadow-lg overflow-hidden'
                  >
                    <div
                      className='w-96 bg-center bg-cover bg-no-repeat'
                      style={{
                        backgroundImage: "url('/images/product-thumbnail.jpg')",
                      }}
                    />
                    <div className='w-full p-4 pl-0 flex flex-col gap-2'>
                      <Button variant="text" disableRipple className='!p-0 w-fit' onClick={handleClickDetail}>
                        <Typography variant='body1' className='!font-semibold'>
                          Hilton Garden Inn
                        </Typography>
                      </Button>
                      <div className='flex gap-2'>
                        {new Array(5).fill(null).map((_, i) => (
                          <Image src={starIcon} width={17} alt='star' key={i} />
                        ))}
                      </div>
                      <div className='flex gap-2 items-center'>
                        <Image src={pinMarker} alt='pin map' width={14} />
                        <Typography variant='caption'>
                          Jl. Taman Palem Lestari No.1 Blok B13, West
                          Cengkareng, Cengkareng, West Jakarta City, Jakarta
                          11730
                        </Typography>
                      </div>
                      <div className='flex gap-2 items-center'>
                        <Image src={icLaundry} alt='pin map' width={20} />
                        <Image src={icSwimmingPool} alt='pin map' width={20} />
                        <Image src={icReceptionist} alt='pin map' width={20} />
                        <Image src={icGym} alt='pin map' width={20} />
                        <Image src={icSpa} alt='pin map' width={20} />
                      </div>
                      <div className='flex gap-2 items-center'>
                        <Button
                          variant='contained'
                          className='!rounded-2xl !normal-case italic'
                          size='small'
                        >
                          Bisa refund
                        </Button>
                        <Button
                          variant='contained'
                          className='!rounded-2xl !normal-case italic'
                          size='small'
                        >
                          Bisa reschedule
                        </Button>
                      </div>
                      <div className='flex gap-2 justify-end items-baseline'>
                        <Typography
                          color='primary'
                          variant='h6'
                          className='!font-bold'
                        >
                          IDR 99.999.999
                        </Typography>
                        <Typography variant='body1'>/ malam</Typography>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    );
}

export default SearchResultPage;
