import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Label from '@/app/(primary)/_components/Label';
import { truncStr } from '@/utils/truncStr';

import dummyImg from '/public/whiskey_img1.png';

interface Props {
  data: {
    korName: string;
    engName: string;
    korCategory: string;
    engRegion: string;
    cask: string;
    avg: string;
    engDistillery: string;
  };
}

function AlcoholInfo({ data }: Props) {
  const { korName, engName, korCategory } = data;
  const [details, setDetails] = useState<any>([]);

  useEffect(() => {
    if (data) {
      setDetails([
        {
          title: '캐스크',
          content: data.cask,
        },
        {
          title: '증류소',
          content: data.engDistillery,
        },
        {
          title: '국가/지역',
          content: data.engRegion,
        },
        {
          title: '도수',
          content: data.avg + '%',
        },
      ]);
    }
  }, [data]);
  return (
    <section className="relative z-10 flex px-5 pb-6 space-x-5">
      <div className="rounded-lg flex-1 bg-white p-4 h-56">
        <article className="relative h-48 w-24">
          {/* {data?.alcohols?.alcoholUrlImg && ( */}
          <Image
            priority
            className="max-w-full max-h-full"
            src={dummyImg}
            alt="img"
            width={100}
            height={200}
          />
          {/* )} */}
        </article>
      </div>
      <article className="flex-2 py-3 text-white space-y-2 overflow-x-hidden">
        {/* {data?.alcohols && ( */}
        <div className="space-y-2">
          <div className="space-y-1">
            <Label
              name={korCategory}
              style={'border-white px-2 py-[0.15rem] rounded-md text-10'}
            />
            <h1 className="text-15 font-semibold whitespace-normal break-words">
              {truncStr(korName, 27)}
              {/* {data.alcohols.korName && truncStr(data.alcohols.korName, 27)} */}
            </h1>
            <p className="text-13 whitespace-normal break-words">
              {/* {data.alcohols.engName && */}
              {truncStr(engName.toUpperCase(), 45)}
              {/* } */}
            </p>
          </div>
          <div>
            {details.map((data: any) => (
              <div
                key={data.content}
                className="flex text-9 text-white items-center"
              >
                <div className="min-w-14 font-semibold">{data.title}</div>
                <div className="flex-1 font-light">{data.content}</div>
              </div>
            ))}
          </div>
          <div className="space-y-1">
            <div className="border-[0.5px] border-white" />
            <div className="flex space-x-3">
              <div className="text-10 flex">
                <Image
                  className="mr-1"
                  src="/icon/like-filled-white.svg"
                  alt="like"
                  width={16}
                  height={16}
                />
                <button>찜하기</button>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </article>
    </section>
  );
}

export default AlcoholInfo;
