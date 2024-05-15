import React from 'react';
import BackHeader from '@/app/(primary)/_components/BackHeader';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <BackHeader /> */}
      {children}
    </div>
  );
}
