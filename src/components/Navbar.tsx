import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface NavItem {
  name: string;
  link: string;
  icon: string;
}

function Navbar() {
  const navItems: NavItem[] = [
    { name: '홈', link: '/', icon: '/home.svg' },
    { name: '검색', link: '/search', icon: '/search.svg' },
    { name: '별점', link: '/rating', icon: '/star.svg' },
    { name: '마이', link: '/user', icon: '/user.svg' },
  ];
  return (
    <nav className="fixed bottom-1 w-full max-w-[375px] px-4">
      {/* 정확한 사이즈 확인 후 수정 필요 */}
      <section className="h-[4.4rem] flex justify-between bg-subGray py-4 px-9 rounded-[0.8rem] drop-shadow-[0_3px_3px_rgba(0,0,0,0.30)]">
        {navItems.map((menu: NavItem, index: number) => (
          <>
            <Link
              key={menu.name}
              className="flex flex-col items-center space-y-1"
              href={menu.link}
            >
              <Image src={menu.icon} alt={menu.name} width={23} height={23} />
              <span className="text-xs text-subCoral">{menu.name}</span>
            </Link>
            {index !== navItems.length - 1 && (
              <span className="border-[0.01rem] border-subCoral" />
            )}
          </>
        ))}
        {/* 로그인 user가 아니면? 없어지는가? */}
      </section>
    </nav>
  );
}

export default Navbar;
