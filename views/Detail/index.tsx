'use client';

import AppContainer from '@/components/base/AppContainer';
import { Typography, Button, Tab, Tabs, Box } from '@mui/material';
import Image from 'next/image';
import starIcon from '@/public/svg/star.svg';
import pinMarker from '@/public/svg/pinMarker.svg';
import TabContent from '@/components/base/TabContent';
import icGym from '@/public/svg/ic_gym.svg';
import icLaundry from '@/public/svg/ic_laundry.svg';
import icReceptionist from '@/public/svg/ic_receptionist.svg';
import icSwimmingPool from '@/public/svg/ic_swimming_pool.svg';
import useDetail from './index.hooks';
import DetailSearch from '@/components/ui/DetailSearch';
import ProchedureCheckin from './components/ProchedureCheckin';
import LocationDetail from './components/LocationDetail';
import ReviewDetail from './components/ReviewDetail';
import RoomDetail from './components/RoomDetail';

const Detail = () => {
  const { valueTabs, handleTabsChange, a11yProps, expandFacility, toggleExpandFacility } = useDetail();

  return (
    <AppContainer className='flex flex-col gap-4 py-4'>
      <div className='flex flex-col gap-6 h-auto min-h-screen pt-20'>
        <DetailSearch />
        <div className='flex flex-col gap-4 p-4'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-4'>
                <Typography variant='h5'>Hilton Garden Inn</Typography>
                <div className='flex gap-2'>
                  <Image src={starIcon} width={17} alt='star' />
                  <Image src={starIcon} width={17} alt='star' />
                  <Image src={starIcon} width={17} alt='star' />
                  <Image src={starIcon} width={17} alt='star' />
                  <Image src={starIcon} width={17} alt='star' />
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <Image src={pinMarker} alt='pin map' width={14} />
                <Typography variant='caption'>
                  Jl. Taman Palem Lestari No.1 Blok B13, West Cengkareng,
                  Cengkareng, West Jakarta City, Jakarta 11730
                </Typography>
              </div>
            </div>
            <div className='w-full min-h-96 grid grid-cols-1 md:grid-cols-4 gap-4 [&>div]:rounded-xl'>
              <div className='md:col-span-2 md:row-span-2 overflow-hidden hover:[&>div]:scale-110 hover:drop-shadow-lg'>
                <div
                  className='bg-center bg-no-repeat bg-cover w-full h-full min-h-60 md:min-h-fit transition-all duration-300'
                  style={{
                    backgroundImage: "url('/images/product-thumbnail.jpg')",
                  }}
                />
              </div>
              {new Array(4).fill(null).map((_, i) => (
                <div
                  key={i}
                  className='col-span-1 row-span-1 overflow-hidden hover:[&>div]:scale-110 hover:drop-shadow-lg min-h-60 md:min-h-fit'
                >
                  <div
                    className='bg-center bg-no-repeat bg-cover col-span-1 w-full h-full transition-all duration-300'
                    style={{
                      backgroundImage: "url('/images/product-thumbnail.jpg')",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Box>
          <Tabs
            value={valueTabs}
            onChange={handleTabsChange}
            aria-label='basic tabs example'
            classes={{
              list: 'overflow-auto'
            }}
          >
            <Tab
              label='Tentang Hotel'
              {...a11yProps(0)}
              className='!normal-case'
            />
            <Tab label='Fasilitas' {...a11yProps(1)} className='!normal-case' />
            <Tab label='Kamar' {...a11yProps(2)} className='!normal-case' />
            <Tab label='Review' {...a11yProps(3)} className='!normal-case' />
            <Tab label='Lokasi' {...a11yProps(4)} className='!normal-case' />
            <Tab
              label='Kebijakan Hotel'
              {...a11yProps(5)}
              className='!normal-case'
            />
          </Tabs>
          <TabContent
            value={valueTabs}
            index={0}
            className='whitespace-pre-line'
          >
            <p>
              Berlokasi di Cengkareng, Jakarta Barat, Hilton Garden Inn Jakarta
              Taman Palem merupakan hotel bintang 5 yang menawarkan penginapan
              yang nyaman dilengkapi dengan layanan resepsionis 24 jam dan
              fasilitas rapat.
            </p>
            <br />
            <p>
              Kamar ber-AC dengan desain modern dan menenangkan yang ditawarkan
              dilengkapi dengan TV layar datar, meja kerja, dan kasur yang
              nyaman. Kamar mandi dilengkapi dengan shower dan wastafel
              bercermin.
            </p>
            <br />
            <p>
              Restoran Garden Grille & Bar menyediakan berbagai pilihan hidangan
              fresh, sarapan cooked-to-order, dan cocktail pada bar. Pilihan
              restoran yang terletak dekat dengan akomodasi yaitu Shirato by
              Dailybox dan Yoshinoya Green Sedayu Mall. Fasilitas lain yang
              ditawarkan yaitu pusat kebugaran dan kolam renang yang menghadap
              ke cakrawala kota. Bandara Internasional Soekarno-Hatta berjarak
              8.20 km dari hotel.
            </p>
            <br />
            <p>
              Destinasi populer yang terdapat dekat dengan hotel adalah Palm Bay
              Waterpark, Waterbom Jakarta, dan PIK Avenue Mall.
            </p>
          </TabContent>
          <TabContent value={valueTabs} index={1} className='text-center'>
            <div
              className={`${
                expandFacility ? 'h-52' : 'h-20'
              } overflow-hidden flex w-full gap-2 flex-col transition-all duration-300`}
            >
              {new Array(3).fill(null).map((_, i) => (
                <div
                  className='grid grid-cols-2 md:grid-cols-4 gap-4 my-2'
                  key={`facility-${i}`}
                >
                  <div className='flex gap-2'>
                    <Image src={icLaundry} alt='laundry' width={20} />
                    <Typography>Laundry</Typography>
                  </div>
                  <div className='flex gap-2'>
                    <Image src={icSwimmingPool} alt='SwimmingPool' width={20} />
                    <Typography>Kolam Renang</Typography>
                  </div>
                  <div className='flex gap-2'>
                    <Image src={icReceptionist} alt='Receptionist' width={20} />
                    <Typography>Receptionist</Typography>
                  </div>
                  <div className='flex gap-2'>
                    <Image src={icGym} alt='Gym' width={20} />
                    <Typography>Gym</Typography>
                  </div>
                </div>
              ))}
            </div>
            <Button
              className='!mt-2 !normal-case !mx-auto'
              onClick={toggleExpandFacility}
            >
              {expandFacility ? 'Sembunyikan' : 'Tampilkan lebih banyak'}
            </Button>
          </TabContent>
          <TabContent
            value={valueTabs}
            index={2}
            className='[&>div]:flex [&>div]:flex-col [&>div]:w-full [&>div]:gap-8'
          >
            <RoomDetail />
          </TabContent>
          <TabContent value={valueTabs} index={3}>
            <ReviewDetail />
          </TabContent>
          <TabContent value={valueTabs} index={4}>
            <LocationDetail />
          </TabContent>
          <TabContent value={valueTabs} index={5}>
            <ProchedureCheckin />
          </TabContent>
        </Box>
      </div>
    </AppContainer>
  );
};

export default Detail;
