import { getCabins } from '@/lib/data-service';
import { Cabin } from '@/types/Cabin';
import React from 'react';
import CabinCard from './CabinCard';

const CabinList = async () => {
  const cabins: Cabin[] = await getCabins();
  
  if (cabins.length === 0) return null;
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
      {cabins.map(cabin => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinList;
