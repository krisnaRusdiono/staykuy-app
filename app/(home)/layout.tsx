'use client'

import Header from '@/components/layout/Header';
import { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
      <div className='h-auto min-h-screen'>
        <Header />
        <main>{children}</main>
      </div>
    );
}

export default HomeLayout;
