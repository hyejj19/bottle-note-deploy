'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Star from '@/components/Star';
import whiskeyImg from 'public/dummy-img1.jpeg';
import { truncStr } from '@/utils/truncStr';
import BackHeader from '@/app/(primary)/_components/BackHeader';
import Label from '@/app/(primary)/_components/Label';
import FlavorTag from '../../../_components/FlavorTag';

type Details = {
  title: string;
  content: string;
};

function SearchCategory() {
  const [details, setDetails] = useState<Details[]>([]);
  const data = {
    korCategory: '싱글몰트',
    engCategory: 'Single malt',
    region: 'Soeyside, Scotland',
    cask: 'ex-Olloroso Sherry',
    degree: '43%',
    distillery: 'Glen Dronach',
    korName: '글렌드로낙 오리지널 12Y 글렌드로낙 오리지널 글렌드로낙 오리지널',
    engName: 'glendronach original 12 year glendronach original 12 year',
    rating: 3,
    userCount: 217,
    flavorTags: [
      '건자두',
      '생강',
      '스파이시',
      '달콤한',
      '과일',
      '오크',
      '바닐라',
      '토피',
      '건포도',
      '캐러멜',
      '사과',
      '스파이시',
      '달콤한',
      '긴단어테스트하고있음',
    ],
    users: [
      { userId: '1', userName: '술쟁이다아앙', rating: 3, img: '' },
      { userId: '2', userName: '술쟁이다아앙___!', rating: 3, img: '' },
      { userId: '3', userName: '루미다', rating: 3.5, img: '' },
      { userId: '4', userName: '술쟁이다아앙', rating: 4, img: '' },
      { userId: '5', userName: '술쟁이다아앙', rating: 2.4, img: '' },
      { userId: '6', userName: '술쟁이다아앙', rating: 3, img: '' },
      { userId: '7', userName: '술쟁이다아앙', rating: 3, img: '' },
    ],
  };

  useEffect(() => {
    if (data) {
      setDetails([
        {
          title: '카테고리',
          content: data.engCategory,
        },
        {
          title: '국가/지역',
          content: data.region,
        },
        {
          title: '캐스크',
          content: data.cask,
        },
        {
          title: '도수',
          content: data.degree,
        },
        {
          title: '증류소',
          content: data.distillery,
        },
      ]);
    }
  }, []);
  return (
    <div className="pb-20">
      <div className="relative">
        <div className="absolute w-full h-full bg-[url('/dummy-img1.jpeg')] bg-cover bg-center" />
        <div className="absolute w-full h-full bg-mainCoral bg-opacity-90" />
        <BackHeader />
        <section className="relative z-10 flex px-5 py-6 space-x-5">
          <article className="flex-2">
            <Image
              className="rounded-lg"
              src={whiskeyImg}
              alt="img"
              width={150}
              height={250}
            />
          </article>
          <article className="flex-1 py-3 text-white space-y-2">
            <div className="space-y-1">
              <Label name={data.korCategory} />
              <h1 className="text-xl font-semibold whitespace-normal break-words">
                {truncStr(data.korName, 27)}
              </h1>
              <p className="text-xs whitespace-normal break-words">
                {truncStr(data.engName.toUpperCase(), 45)}
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex items-end space-x-1">
                <Star
                  rating={data.rating}
                  size={27}
                  style={'text-white text-[27px] font-bold'}
                  color="white"
                />
                <div className="text-xs mb-1">(유저평가 {data.userCount})</div>
              </div>
              <div className="border-[0.5px] border-white" />
              <div className="flex space-x-3">
                <div className="text-xs flex">
                  <Image
                    className="mr-1"
                    src="/edit-white.svg"
                    alt="write"
                    width={16}
                    height={16}
                  />
                  <button>리뷰 작성</button>
                </div>
                <div className="border-[0.5px] border-white my-[0.1rem]" />
                <div className="text-xs flex">
                  <Image
                    className="mr-1"
                    src="/like-filled-white.svg"
                    alt="like"
                    width={16}
                    height={16}
                  />
                  <button>찜하기</button>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
      {/* 혜정님 별점 컴포넌트 완성되면 공통으로 사용하기 */}
      <section className="mx-5 py-5 border-y border-mainGray grid grid-cols-2 gap-2">
        {details.map((data) => (
          <div
            key={data.content}
            className="flex text-xs text-mainDarkGray items-center"
          >
            <div className="min-w-14 font-semibold">{data.title}</div>
            <div className="flex-1 font-light">{data.content}</div>
          </div>
        ))}
      </section>
      <FlavorTag tagList={data.flavorTags} />
      <section className="mx-5 py-5 border-b border-mainGray space-y-2">
        <div className="flex items-end space-x-1 text-xs text-mainDarkGray">
          <div>마셔본 친구</div>
          <div className="font-extralight">13</div>
        </div>
        <div className="whitespace-nowrap overflow-x-auto flex space-x-5">
          {data.users.map((user) => (
            <div
              key={user.userId}
              className="flex-shrink-0 flex flex-col items-center space-y-1"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden">
                {/* 추후 서버에서 보내주는 이미지 사이즈 보고 사이즈는 수정하기 */}
                <Image
                  className="object-cover"
                  src={whiskeyImg}
                  alt="user_img"
                  width={56}
                  height={56}
                />
              </div>
              <p className="text-xs text-mainDarkGray">
                {truncStr(user.userName, 4)}
              </p>
              <Star rating={user.rating} size={12} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SearchCategory;
