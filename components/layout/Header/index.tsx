import AppContainer from '@/components/base/AppContainer';
import MENU from '@/constants/menu';
import { useLayoutContext } from '@/context/layout';
import { Menu } from '@mui/icons-material';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  const { toggleCollapse } = useLayoutContext();

  return (
    <AppBar>
      <Toolbar variant='regular'>
        <AppContainer className='flex gap-20 justify-between items-center'>
          <div className='flex'>
            <Button
              className='block md:!hidden'
              variant='text'
              onClick={toggleCollapse}
            >
              <Menu className='[&>*]:fill-white' />
            </Button>
            <Link href='/'>
              <Typography variant='h6' className='!font-extrabold'>
                STAYKUY
              </Typography>
            </Link>
          </div>
          <div className='w-full text-right hidden gap-4 justify-end md:flex'>
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
};

export default Header;
