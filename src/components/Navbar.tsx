'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavItem {
  name: string;
  link: string;
  icon: string;
}

function Navbar() {
  const pathname = usePathname();
  const navItems: NavItem[] = [
    { name: '홈', link: '/', icon: '/home.svg' },
    { name: '검색', link: '/search', icon: '/search.svg' },
    { name: '별점', link: '/rating', icon: '/star.svg' },
    { name: '마이', link: '/user/1', icon: '/user.svg' }, // 추후 수정 필요 with pathname
  ];

  return (
    <nav className="fixed bottom-2 left-0 right-0 mx-auto w-full max-w-[400px] px-4 z-50">
      {/* 정확한 사이즈 확인 후 수정 필요 */}
      <section className="h-[4.4rem] flex justify-between bg-subGray py-4 px-9 rounded-[0.8rem] drop-shadow-[0_3px_3px_rgba(0,0,0,0.30)]">
        {navItems.map((menu: NavItem, index: number) => (
          <React.Fragment key={menu.link}>
            <Link
              className={`flex flex-col items-center space-y-1 ${
                (menu.link === '/' && pathname === '/') ||
                (menu.link === '/search' && pathname === '/search') ||
                (menu.link === '/rating' && pathname === '/rating') ||
                (menu.link.startsWith('/user/') &&
                  pathname.startsWith('/user/'))
                  ? ''
                  : 'opacity-40'
              }`}
              href={menu.link}
            >
              <Image src={menu.icon} alt={menu.name} width={23} height={23} />
              <span className="text-xs text-subCoral">{menu.name}</span>
            </Link>
            {index !== navItems.length - 1 && (
              <span className="border-[0.01rem] border-subCoral opacity-40" />
            )}
          </React.Fragment>
        ))}
        {/* 로그인 user가 아니면? 없어지는가? */}
      </section>
    </nav>
  );
}

export default Navbar;
