'use client';

import AppContainer from '@/components/base/AppContainer';
import { Button, Checkbox, Divider, Slider, Typography } from '@mui/material';
import starIcon from '@/public/svg/star.svg';
import Image from 'next/image';
import pinMarker from '@/public/svg/pinMarker.svg';
import icGym from '@/public/svg/ic_gym.svg';
import icLaundry from '@/public/svg/ic_laundry.svg';
import icReceptionist from '@/public/svg/ic_receptionist.svg';
import icSpa from '@/public/svg/ic_spa.svg';
import icSwimmingPool from '@/public/svg/ic_swimming_pool.svg';
import useSearchResult from './index.hooks';
import DetailSearch from '@/components/ui/DetailSearch';
import { HotelData } from './index.types';

const SearchResult = () => {
  const {
    valuePrice,
    handleValuePriceChange,
    renderValuePrice,
    priceLabelFormat,
    handleClickDetail,
    expandFilterFacility,
    toggleExpandFilterFacility,
    response,
    isLoading,
    onCheckboxChange,
  } = useSearchResult();
  
  const { data: dataResponse } = response || {};
  const { data = [] } = dataResponse || {}

  return (
    <AppContainer className='flex flex-col gap-4 py-4'>
      <div className='flex flex-col gap-8 h-auto min-h-screen pt-20'>
        <DetailSearch />
        <div className='flex flex-wrap lg:flex-nowrap gap-8'>
          <div className='min-w-72 w-full lg:w-fit rounded-xl drop-shadow-lg p-4 bg-white flex flex-col gap-4 h-fit'>
            <div className='flex lg:flex-col gap-4 flex-wrap lg:flex-nowrap justify-around'>
              <div className='w-full'>
                <Typography>Filter Pencarian</Typography>
                <div>
                  <Typography>Bintang Hotel</Typography>
                  <div className='flex gap-2 items-center'>
                    <Checkbox
                      value={1}
                      classes={{ root: '!px-0 !py-1' }}
                      onChange={onCheckboxChange}
                    />
                    <div className='flex gap-2 items-center'>
                      <Image src={starIcon} width={17} alt='star' />
                    </div>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Checkbox
                      value={2}
                      classes={{ root: '!px-0 !py-1' }}
                      onChange={onCheckboxChange}

                    />
                    <div className='flex gap-2 items-center'>
                      <Image src={starIcon} width={17} alt='star' />
                      <Image src={starIcon} width={17} alt='star' />
                    </div>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Checkbox
                      value={3}
                      classes={{ root: '!px-0 !py-1' }}
                      onChange={onCheckboxChange}

                    />
                    <div className='flex gap-2 items-center'>
                      <Image src={starIcon} width={17} alt='star' />
                      <Image src={starIcon} width={17} alt='star' />
                      <Image src={starIcon} width={17} alt='star' />
                    </div>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Checkbox
                      value={4}
                      classes={{ root: '!px-0 !py-1' }}
                      onChange={onCheckboxChange}

                    />
                    <div className='flex gap-2 items-center'>
                      <Image src={starIcon} width={17} alt='star' />
                      <Image src={starIcon} width={17} alt='star' />
                      <Image src={starIcon} width={17} alt='star' />
                      <Image src={starIcon} width={17} alt='star' />
                    </div>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Checkbox
                      value={5}
                      classes={{ root: '!px-0 !py-1' }}
                      onChange={onCheckboxChange}

                    />
                    <div className='flex gap-2 items-center'>
                      <Image src={starIcon} width={17} alt='star' />
                      <Image src={starIcon} width={17} alt='star' />
                      <Image src={starIcon} width={17} alt='star' />
                      <Image src={starIcon} width={17} alt='star' />
                      <Image src={starIcon} width={17} alt='star' />
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
              <div className='w-full'>
                <Typography>Fasilitas</Typography>
                <div>
                  <div
                    className={`${
                      expandFilterFacility ? 'h-44' : 'h-24'
                    } overflow-hidden transition-all duration-300`}
                  >
                    <div className='flex gap-2 items-center'>
                      <Checkbox value={5} classes={{ root: '!px-0 !py-1' }} />
                      <Typography>Kolam Renang</Typography>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <Checkbox value={5} classes={{ root: '!px-0 !py-1' }} />
                      <Typography>Parkir Gratis</Typography>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <Checkbox value={5} classes={{ root: '!px-0 !py-1' }} />
                      <Typography>Pusat Kebugaran</Typography>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <Checkbox value={5} classes={{ root: '!px-0 !py-1' }} />
                      <Typography>SPA</Typography>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <Checkbox value={5} classes={{ root: '!px-0 !py-1' }} />
                      <Typography>Cuci Gratis</Typography>
                    </div>
                  </div>
                  <Button
                    variant='text'
                    className='!p-0 !normal-case'
                    disableRipple
                    onClick={toggleExpandFilterFacility}
                  >
                    {`${
                      !expandFilterFacility
                        ? '+ Tampilkan lebih banyak'
                        : 'Sembunyikan'
                    }`}
                  </Button>
                </div>
              </div>
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
          <div className='w-full flex flex-col gap-6'>
            <div className='flex items-baseline gap-2'>
              <Typography variant='h6' className='!font-semibold'>
                Hasil Pencarian
              </Typography>
              <Typography
                variant='caption'
                color='textDisabled'
                className='italic'
              >
                {data.length} Hotel Ditemukan
              </Typography>
            </div>
            {isLoading ? (
              <div className='flex w-full h-full justify-center items-center'>
                Loading
              </div>
            ) : (
              <div className='flex gap-4 flex-col'>
                {(data || []).map((hotel: HotelData) => (
                  <div
                    key={hotel.id}
                    className='flex flex-col md:flex-row gap-6 bg-white rounded-2xl drop-shadow-lg overflow-hidden transition-all hover:drop-shadow-xl hover:[&>:first-child>div]:scale-110'
                  >
                    <div className='w-full md:w-96 h-72 md:h-full overflow-hidden flex'>
                      <div
                        className='w-full md:w-96 bg-center bg-cover bg-no-repeat transition-all duration-300'
                        style={{
                          backgroundImage: `url('${
                            Array.isArray(hotel.images)
                              ? hotel.images[hotel.images.length - 1]
                              : hotel.images
                          }')`,
                        }}
                      />
                    </div>
                    <div className='w-full p-4 md:pl-0 flex flex-col gap-2'>
                      <Button
                        variant='text'
                        disableRipple
                        className='!p-0 w-fit'
                        onClick={handleClickDetail}
                      >
                        <Typography variant='body1' className='!font-semibold'>
                          {hotel.name}
                        </Typography>
                      </Button>
                      <div className='flex gap-2 items-center'>
                        {new Array(hotel.star).fill(null).map((_, i) => (
                          <Image src={starIcon} width={17} alt='star' key={i} />
                        ))}
                      </div>
                      <div className='flex gap-2 items-center'>
                        <Image src={pinMarker} alt='pin map' width={14} />
                        <Typography variant='caption'>
                          {hotel.address}
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
                      <div className='flex gap-2 justify-end items-baseline mt-8 md:mt-4'>
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
            )}
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default SearchResult;
