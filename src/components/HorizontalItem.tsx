import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Star from '@/components/Star';
import { Alcohol } from '@/types/Alcohol';
import whiskey from 'public/whiskey_img1.png';

interface Props {
  data: Alcohol;
}

export default function HorizontalItem({ data }: Props) {
  const { kor_name, rating, category, path } = data;
  return (
    <Link href={path}>
      <div className="w-[10.4rem] h-64 text-subCoral bg-bgGray border-t-[1px] border-b-[1px] border-subCoral">
        {/* API 연동 후 이미지 주소 변경 필요 */}
        <Image src={whiskey} alt="img" height={250} />
        <div className="px-2 pt-2 space-y-2 border-t-[1px] border-subCoral">
          <div
            className="text-[0.9375rem] h-[2.35rem] font-semibold whitespace-normal"
            style={{ lineHeight: 1.2 }}
          >
            {/* 이름이 길어질 경우에 어떻게 적용을 해줘야하나? */}
            {kor_name}
          </div>
          <div className="flex items-center justify-between">
            <Star rating={rating} />
            <p className="text-xs">{category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
