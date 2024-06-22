'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BackDrop from '@/components/BackDrop';

interface Props {
  handleClose: () => void;
}

function LoginModal({ handleClose }: Props) {
  const router = useRouter();
  return (
    <BackDrop isShow>
      <div className="w-full h-full flex flex-col justify-end items-center px-4 gap-3 pb-2">
        <section className="relative w-full pt-20 bg-white rounded-xl text-center flex flex-col items-center space-y-3 px-4">
          <article className="absolute top-[-10px]">
            <Image
              src="/icon/logo-subcoral.svg"
              alt="bottle_logo"
              width={50}
              height={60}
            />
          </article>
          <article>
            <p className="text-15 text-subCoral font-medium">
              로그인이 필요한 서비스입니다.
            </p>
            <p className="text-13 text-mainDarkGray">로그인 하시겠습니까?</p>
          </article>
          <button
            className="w-full bg-subCoral rounded-xl py-4 text-white drop-shadow-md"
            onClick={() => {
              router.push('/login');
            }}
          >
            로그인
          </button>
          <button className="text-10 text-mainGray pb-2" onClick={handleClose}>
            다음에 할게요
          </button>
        </section>
      </div>
    </BackDrop>
  );
}

export default LoginModal;
