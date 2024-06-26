import Spinner from '@/components/Spinner';
import React from 'react';

const Loading = () => {
  return (
    <div className='grid items-center justify-center'>
      <h2>Loading Cabin...</h2>
      <Spinner />;
    </div>
  );
};

export default Loading;
