'use client';

import { ArrowBackIos } from '@mui/icons-material';
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import useHome from './index.hooks';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller } from 'react-hook-form';
import { addDays, subDays } from 'date-fns';

const Home = () => {
  const {
    toggleOpenHistory,
    openHistory,
    control,
    handleSubmit,
    watch,
    onSubmit,
    response,
    isLoading,
    setValue,
  } = useHome();

  const { data: dataCity = [] } = response || {};

  return (
    <div
      className='min-h-screen bg-center bg-no-repeat bg-cover relative'
      style={{
        backgroundImage: "url('/images/bg-homepage.jpg')",
      }}
    >
      <div className='w-screen h-screen bg-neutral-900 opacity-80' />
      <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 container flex flex-col gap-12 p-4 pt-24 md:pt-4'>
        <Typography
          className='text-center text-white !font-semibold !text-xl md:!text-3xl'
          variant='h4'
        >
          Staycation menjadi lebih mudah hanya dengan satu klik dan dapatkan
          banyak promo menarik!
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-full flex flex-col gap-4'
        >
          <div className='w-full bg-white rounded-xl flex flex-wrap lg:flex-nowrap gap-4 p-4 justify-end'>
            <div className='flex flex-col gap-2 w-full h-inherit justify-between'>
              <Typography variant='body2'>
                Pilih Kota/Nama Hotel/ Destinasi
              </Typography>
              <Controller
                control={control}
                name='city'
                render={({
                  field: { onChange, value, ref },
                  fieldState: { error },
                }) => (
                  <Select
                    ref={ref}
                    labelId='city'
                    id='city'
                    value={value}
                    className='[&>div]:!rounded-2xl w-full'
                    onChange={(event) => {
                      const { target: { value } } = event;
                      const { name = ''} = dataCity.find(({ id }: { id: number }) => id === value);
                      setValue('cityName', name)
                      onChange(event);
                    }}
                    error={!!error}
                    disabled={isLoading}
                    autoFocus
                  >
                    {(dataCity || []).map(
                      ({ id, name }: { id: number; name: string }) => (
                        <MenuItem value={id} key={id}>
                          {name}
                        </MenuItem>
                      )
                    )}
                  </Select>
                )}
              />
            </div>
            <div className='flex flex-col gap-2 w-full h-inherit justify-between'>
              <Typography variant='body2'>Tanggal Menginap</Typography>
              <div className='flex gap-2'>
                <Controller
                  control={control}
                  name='startDate'
                  render={({ field: { onChange, value, ref } }) => (
                    <DatePicker
                    className='w-full'
                      label='Tanggal Mulai'
                      maxDate={
                        watch('endDate') &&
                        subDays(watch('endDate') || new Date(), 1)
                      }
                      onChange={onChange}
                      value={value}
                      ref={ref}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name='endDate'
                  render={({ field: { onChange, value, ref } }) => (
                    <DatePicker
                    className='w-full'
                      label='Tanggal Selesai'
                      minDate={
                        watch('startDate') &&
                        addDays(watch('startDate') || new Date(), 1)
                      }
                      onChange={onChange}
                      value={value}
                      ref={ref}
                    />
                  )}
                />
              </div>
            </div>
            <div className='flex flex-col gap-2 w-full h-inherit justify-between'>
              <Typography variant='body2'>Jumlah Tamu dan Kamar</Typography>
              <div className='flex gap-2'>
                <Controller
                  control={control}
                  name='guest'
                  render={({
                    field: { onChange, value, ref },
                    fieldState: { error },
                  }) => (
                    <TextField
                      className='[&>div]:!rounded-2xl w-full'
                      placeholder='Tamu'
                      onChange={event => {
                        const { target } = event;
                        const { value } = target;
                        onChange({
                          ...event,
                          target: {
                            ...target,
                            value: Boolean(value)
                              ? value.replace(/^0+/, '')
                              : 0,
                          },
                        });
                      }}
                      value={value}
                      ref={ref}
                      error={!!error}
                      type='number'
                    />
                  )}
                />
                <Controller
                  control={control}
                  name='room'
                  render={({
                    field: { onChange, value, ref },
                    fieldState: { error },
                  }) => (
                    <TextField
                      className='[&>div]:!rounded-2xl w-full'
                      placeholder='Kamar'
                      onChange={event => {
                        const { target } = event;
                        const { value } = target;
                        onChange({
                          ...event,
                          target: {
                            ...target,
                            value: Boolean(value)
                              ? value.replace(/^0+/, '')
                              : 0,
                          },
                        });
                      }}
                      value={value}
                      ref={ref}
                      error={!!error}
                      type='number'
                    />
                  )}
                />
              </div>
            </div>
            <div className='flex flex-col gap-2 justify-end'>
              <div />
              <Button
                variant='contained'
                className='h-14 text-nowrap w-40 self-end !rounded-2xl'
                type='submit'
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
                    <ListItemText primary='-' />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
