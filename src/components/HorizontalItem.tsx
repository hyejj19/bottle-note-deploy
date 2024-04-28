import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Star from '@/components/Star';
import { truncStr } from '@/utils/truncStr';
import { Alcohol } from '@/types/Alcohol';
import whiskey from 'public/whiskey_img1.png';

interface Props {
  data: Alcohol;
}

export default function HorizontalItem({ data }: Props) {
  const { kor_name, rating, category, path } = data;
  return (
    <Link href={path}>
      <div className="w-[10rem] h-[15.5rem] bg-bgGray border-t-[0.13rem] border-b-[0.13rem] border-subCoral">
        {/* API 연동 후 이미지 주소 변경 필요 */}
        <Image src={whiskey} alt="img" height={250} />
        <div className="px-2 pt-[0.625rem] space-y-2 border-t-[1px] border-subCoral">
          <div
            className="text-[0.9375rem] h-[2.35rem] font-semibold whitespace-normal break-words text-mainDarkGray"
            style={{ lineHeight: 1.2 }}
          >
            {truncStr(kor_name, 23)}
          </div>
          <div className="flex items-center justify-between text-subCoral">
            <Star rating={rating} />
            <p className="text-xs">{category.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
