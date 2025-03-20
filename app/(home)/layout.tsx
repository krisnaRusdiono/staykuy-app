'use client'

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { LayoutContextProvider } from '@/context/layout';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <LayoutContextProvider>
          <Sidebar />
          <div className='h-auto min-h-screen'>
            <Header />
            <main>{children}</main>
          </div>
        </LayoutContextProvider>
      </LocalizationProvider>
    );
}

export default HomeLayout;
