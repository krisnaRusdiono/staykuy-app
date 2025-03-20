'use client'

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { LayoutContextProvider } from '@/context/layout';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { ReactNode } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <QueryClientProvider client={queryClient}>
        <LayoutContextProvider>
          <Sidebar />
          <div className='h-auto min-h-screen'>
            <Header />
            <main>{children}</main>
          </div>
        </LayoutContextProvider>
      </QueryClientProvider>
    </LocalizationProvider>
  );
}

export default HomeLayout;
