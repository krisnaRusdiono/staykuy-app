import { Typography, Button } from '@mui/material';
import Image from 'next/image'
import icBreakfast from '@/public/svg/ic_breakfast.svg';
import icBed from '@/public/svg/ic_double_bed.svg';
import icWifi from '@/public/svg/ic_wifi.svg';
import icPerson from '@/public/svg/ic_person.svg';

const RoomDetail = () => (
  <>
    {new Array(2).fill(null).map((_, i) => (
      <div key={`kamar-${i}`} className='flex flex-wrap md:flex-nowrap gap-4'>
        <div className='rounded-2xl overflow-hidden drop-shadow-lg bg-white h-fit w-full md:w-96 hover:[&>:first-child>div]:scale-110 hover:drop-shadow-xl transition-all'>
          <div className='rounded-2xl w-full h-fit overflow-hidden'>
            <div
              className='bg-center bg-cover bg-no-repeat h-full min-h-80 md:min-h-[12.5rem] duration-300 transition-all'
              style={{
                backgroundImage: "url('/images/product-thumbnail.jpg')",
              }}
            />
          </div>
          <div className='flex justify-between gap-4 p-4'>
            <Typography>Kamar Twin Bed</Typography>
            <Typography>
              42 <sup>m2</sup>
            </Typography>
          </div>
        </div>
        <div className='flex flex-col gap-4 w-full'>
          {new Array(3).fill(null).map((_, id) => (
            <div
              key={`detail-${i}-${id}`}
              className='bg-white drop-shadow-xl flex-wrap md:flex-nowrap justify-end rounded-2xl p-4 flex gap-4 w-full md:justify-between min-h-[12.5rem] hover:drop-shadow-2xl transition-all duration-300'
            >
              <div className='w-full flex flex-col gap-4'>
                <Typography variant='body1' className='!font-semibold'>
                  Kamar, 2 Tempat Tidur Twin
                </Typography>
                <div className='flex gap-2 items-center'>
                  <Button
                    variant='contained'
                    className='!rounded-2xl !normal-case'
                    size='small'
                  >
                    Bisa <i className='ml-1'>refund</i>
                  </Button>
                  <Button
                    variant='contained'
                    className='!rounded-2xl !normal-case'
                    size='small'
                  >
                    Bisa <i className='ml-1'>reschedule</i>
                  </Button>
                </div>
                <div className='flex gap-4 flex-wrap w-full'>
                  <div className='flex gap-2 px-4'>
                    <Image src={icPerson} alt='visitor' />
                    <Typography variant='body1'>2 Tamu</Typography>
                  </div>
                  <div className='flex gap-2 px-4'>
                    <Image src={icBed} alt='bed' />
                    <Typography variant='body1'>1 Twin Bed</Typography>
                  </div>
                  <div className='flex gap-2 px-4'>
                    <Image src={icBreakfast} alt='breakfast' width={20} />
                    <Typography variant='body1'>Sarapan</Typography>
                  </div>
                  <div className='flex gap-2 px-4'>
                    <Image src={icWifi} alt='wifi' width={20} />
                    <Typography variant='body1'>Wifi Gratis</Typography>
                  </div>
                </div>
              </div>
              <div className='min-w-72 text-right self-end'>
                <Typography
                  color='textDisabled'
                  variant='h6'
                  className='!font-semibold line-through'
                >
                  IDR 99.999.999
                </Typography>
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
                <Button variant='contained' className='!rounded-xl !mt-4'>
                  Pilih Kamar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </>
);

export default RoomDetail;