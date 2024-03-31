import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/Logo_2.png';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-5">
      <Link className="flex flex-col items-center space-y-1" href="/">
        <Image
          className="rounded-full border"
          src={Logo}
          alt="logo"
          width={30}
          height={30}
        />
        <span className="text-sm">Home</span>
      </Link>
      <Link className="flex flex-col items-center space-y-1" href="/search">
        <Image
          className="rounded-full border"
          src={Logo}
          alt="logo"
          width={30}
          height={30}
        />
        <span className="text-sm">검색</span>
      </Link>
      <Link className="flex flex-col items-center space-y-1" href="/rating">
        <Image
          className="rounded-full border"
          src={Logo}
          alt="logo"
          width={30}
          height={30}
        />
        <span className="text-sm">별점</span>
      </Link>
      <Link className="flex flex-col items-center space-y-1" href="/mypage">
        <Image
          className="rounded-full border"
          src={Logo}
          alt="logo"
          width={30}
          height={30}
        />
        <span className="text-sm">마이페이지</span>
        {/* 로그인 user가 아니면? 없어지는가? */}
      </Link>
    </nav>
  );
}
