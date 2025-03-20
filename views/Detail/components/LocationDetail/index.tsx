import { Typography, Button } from '@mui/material';
import icShop from '@/public/svg/ic_shop.svg';
import Image from 'next/image'

const LocationDetail = () => (
  <div className='flex flex-col lg:flex-row gap-4'>
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9390151431508!2d106.72653547583761!3d-6.138895493848001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d772ed6f4d7%3A0x32884c7782eb6492!2sHilton%20Garden%20Inn%20Jakarta%20Taman%20Palem!5e0!3m2!1sid!2sid!4v1742429932287!5m2!1sid!2sid'
      allowFullScreen
      className='w-full min-h-96 rounded-xl'
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    />
    <div className='w-full flex flex-col gap-4'>
      <div>
        <Typography>
          Jalan Taman Palem Lestari Blok 13 no 1, Cengkareng, Jakarta Barat
        </Typography>
        <Button variant='text' className='!p-0 !underline'>
          Lihat peta
        </Button>
      </div>
      <div className='flex gap-4'>
        <Image src={icShop} alt='shop' width={22} />
        <Typography variant='body1'>Dekat dengan mall Taman Palem</Typography>
      </div>
      <div className='flex gap-4'>
        <Image src={icShop} alt='shop' width={22} />
        <Typography variant='body1'>Dekat dengan PIK 2</Typography>
      </div>
      <div className='flex gap-4'>
        <Image src={icShop} alt='shop' width={22} />
        <Typography variant='body1'>Dekat dengan Helens Kitchen</Typography>
      </div>
    </div>
  </div>
);

export default LocationDetail;
