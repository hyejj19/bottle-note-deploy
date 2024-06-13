'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SubHeader } from '@/app/(primary)/_components/SubHeader';
import dummyImg from '/public/whiskey_img1.png';
import AlcoholInfo from '@/app/(primary)/review/_components/AlcoholInfo';
import ReviewForm from '../_components/ReviewForm';

function ReviewRegister() {
  const router = useRouter();
  const DATA = {
    korName: '글래스고 1770 싱글몰트 스카치 위스키',
    engName: '1770 Glasgow Single Malt',
    korCategory: '싱글몰트',
    engRegion: 'Soeyside, Scotland',
    cask: 'ex-Olloroso Sherry',
    avg: '43',
    engDistillery: 'Glen Dronach',
  };
  return (
    <>
      <div className="relative">
        {/* {data?.alcohols?.alcoholUrlImg && ( */}
        <div
          className={`absolute w-full h-full  bg-cover bg-center`}
          style={{ backgroundImage: `${dummyImg}` }}
          // style={{ backgroundImage: `url(${dummyImg})` }}
        />
        {/* )} */}
        <div className="absolute w-full h-full bg-mainCoral bg-opacity-90" />
        <SubHeader bgColor="bg-mainCoral/10">
          <SubHeader.Left
            onClick={() => {
              router.back();
            }}
          >
            <Image
              src="/icon/arrow-left-white.svg"
              alt="arrowIcon"
              width={23}
              height={23}
            />
          </SubHeader.Left>
          <SubHeader.Center textColor="text-white">리뷰 작성</SubHeader.Center>
        </SubHeader>
        <AlcoholInfo data={DATA} />
      </div>
      <ReviewForm />
    </>
  );
}

export default ReviewRegister;
