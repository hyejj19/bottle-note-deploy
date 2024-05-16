'use client';

import React from 'react';
import Image from 'next/image';

export default function BackHeader() {
  const handleGoBack = () => {};
  return (
    <div className="flex justify-between relative py-[1.3rem] px-5">
      <button onClick={handleGoBack}>
        <Image src="/arrowLeft.svg" alt="arrowIcon" width={23} height={23} />
      </button>
      <button>
        {/* 브라우저는 복사, 핸드폰은 공유하기 */}
        <Image src="/externalLink.svg" alt="linkIcon" width={23} height={23} />
      </button>
    </div>
  );
}
