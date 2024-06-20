import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account',
};

const Page = () => {
  return (
    <div>
      <h2 className='font-semibold text-2xl text-accent-400 mb-4'>
        Welcome Bashmohandesa Noura
      </h2>
    </div>
  );
};

export default Page;
