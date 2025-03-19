'use client'

import formatDate from '@/helpers/formatDate';
import createQueryParams from '@/utils/createQueryParams';
import { ArrowBackIos } from '@mui/icons-material';
import { Button, List, ListItem, ListItemButton, ListItemText, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [openHistory, setOpenHistory] = useState<boolean>(false);

  const toggleOpenHistory = () => setOpenHistory(!openHistory);

  const onClickSearch = () => {
    const queryString = createQueryParams({ destination: 'bandung', date: formatDate(new Date()), visitor: 4 })
    router.push(`search-result?${queryString}`)
  }

  return (
    <div
      className='min-h-screen bg-center bg-no-repeat bg-cover relative'
      style={{
        backgroundImage: "url('./images/bg-homepage.jpg')",
      }}
    >
      <div className='w-screen h-screen bg-neutral-900 opacity-80' />
      <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 container flex flex-col gap-12'>
        <Typography className='text-center text-white' variant='h4'>
          Staycation menjadi lebih mudah hanya dengan satu klik dan dapatkan
          banyak promo menarik!
        </Typography>
        <div className='w-full flex flex-col gap-4'>
          <div className='w-full bg-white rounded-xl flex gap-4 p-4'>
            <div className='flex flex-col gap-2 w-full h-inherit justify-between'>
              <Typography variant='body2'>
                Pilih Kota/Nama Hotel/ Destinasi
              </Typography>
              <TextField
                className='[&>div]:!rounded-2xl w-full'
                placeholder='Pilih nama hotel/destinasi/kota menginap'
              />
            </div>
            <div className='flex flex-col gap-2 w-full h-inherit justify-between'>
              <Typography variant='body2'>Tanggal Menginap</Typography>
              <TextField
                className='[&>div]:!rounded-2xl w-full'
                placeholder='Pilih tanggal menginap'
              />
            </div>
            <div className='flex flex-col gap-2 w-full h-inherit justify-between'>
              <Typography variant='body2'>Jumlah Tamu dan Kamar</Typography>
              <TextField
                className='[&>div]:!rounded-2xl w-full'
                placeholder='Masukan jumlah tamu dan kamar'
              />
            </div>
            <div className='flex flex-col gap-2 justify-end'>
              <div />
              <Button
                variant='contained'
                className='h-14 text-nowrap w-40 self-end !rounded-2xl'
                onClick={onClickSearch}
              >
                Cari Hotel
              </Button>
            </div>
          </div>
          <div className='relative'>
            <Button
              variant='text'
              disableRipple
              className='!p-0'
              onClick={toggleOpenHistory}
            >
              <Typography className='normal-case bg-primary-900 text-white w-fit p-2 px-3 rounded-2xl flex gap-2 items-center h-12'>
                Lihat Pencarian Terakhir-mu
                <ArrowBackIos
                  className={`${
                    openHistory ? 'rotate-90 mt-1' : 'rotate-270 mb-1'
                  } !w-4 !transition-all [&>*]:fill-white`}
                />
              </Typography>
            </Button>
            {openHistory && (
              <List className='bg-white min-w-72 max-w-96 overflow-x-auto !absolute transition-all'>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary='Trash' />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary='Spam' />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
