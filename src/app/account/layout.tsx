import React from 'react';
import SideNavigation from '../../components/SideNavigation';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='grid grid-cols-[16rem_1fr] gap-12 h-full'>
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
