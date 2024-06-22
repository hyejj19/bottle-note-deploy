import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="h-full w-full absolute top-0 left-0 z-50 bg-[#101010]/80 flex flex-col items-center justify-center space-y-2">
      <Image
        src="/icon/logo-white.svg"
        alt="bottle_logo"
        width={60}
        height={102}
      />
      <Image
        src="/icon/logo-text-white.svg"
        alt="bottle_logo"
        width={60}
        height={102}
      />
    </div>
  );
}
