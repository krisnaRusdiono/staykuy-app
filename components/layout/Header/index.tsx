import AppContainer from '@/components/base/AppContainer';
import MENU from '@/constants/menu';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

const Header = () => (
  <AppBar>
    <Toolbar variant='regular'>
      <AppContainer className='flex gap-20 justify-between items-center'>
        <Link href="/">
          <Typography variant='h6' className='!font-extrabold'>
            STAYKUY
          </Typography>
        </Link>
        <div className='w-full text-right flex gap-4 justify-end'>
          {MENU.map(({ id, path, name }) => (
            <Link href={path} key={id}>
              {name}
            </Link>
          ))}
        </div>
        <div className='flex gap-4 items-center'>
          <Typography className='w-10 h-10 flex justify-center items-center bg-neutral-700 text-white box-border rounded-full text-xl'>
            T
          </Typography>
          <Typography variant='h6'>ID</Typography>
        </div>
      </AppContainer>
    </Toolbar>
  </AppBar>
);

export default Header;
