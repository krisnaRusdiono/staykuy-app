'use client'

import Header from '@/components/layout/Header';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className='h-auto min-h-screen'>
          <Header />
          <main>{children}</main>
        </div>
      </LocalizationProvider>
    );
}

export default HomeLayout;
