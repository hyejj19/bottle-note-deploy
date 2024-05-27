'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const hideNavbarPaths = [
    /^\/search\/Single\sMalt\/\d+$/,
    /^\/search\/Single\sMalt\/\d+\/reviews$/,
    /^\/review\/\d+\/register$/,
    /^\/review\/\d+\/modify$/,
  ];

  const shouldHideNavbar = hideNavbarPaths.some((pattern) =>
    pattern.test(pathname),
  );

  return (
    <div className="bg-white flex flex-col w-full mx-auto max-w-[430px] min-h-screen">
      <main className="flex-1 overflow-y-auto">
        {children}
        {shouldHideNavbar && <Navbar maxWidth="430px" />}
      </main>
    </div>
  );
}
