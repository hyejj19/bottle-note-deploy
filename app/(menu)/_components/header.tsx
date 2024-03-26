import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/Logo_2.png';

export default function Header() {
  return (
    <div className="flex justify-between p-5">
      <Link href="/">
        <Image src={Logo} alt="logo" width={60} height={40} />
      </Link>
      <Link href="/">
        <Image
          className="rounded-full border"
          src={Logo}
          alt="logo"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}
