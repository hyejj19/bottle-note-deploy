import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

type Props = {
  data: {
    listType?: 'Full' | 'Half';
    engName: string;
    korName: string;
    linkSrc: string;
    imgSrc?: StaticImageData;
    icon?: boolean;
  };
};

function LinkButton({
  data: { listType = 'Full', engName, korName, imgSrc, linkSrc, icon = false },
}: Props) {
  return (
    <div
      className={`relative w-full hover:pointer ${
        listType === 'Full'
          ? 'h-20 flex items-center'
          : 'rounded-xl bg-mainCoral h-[10.0625rem]'
      }`}
    >
      {listType === 'Full' && (
        <>
          <div className="absolute w-full h-full rounded-xl bg-[url('/bg_category.jpg')] bg-cover bg-center" />
          <div className="absolute w-full h-full rounded-xl bg-mainCoral bg-opacity-90" />
        </>
      )}
      <Link
        href={linkSrc}
        className={`h-full w-full flex flex-col justify-between relative z-10 ${listType === 'Full' ? 'py-[1.0638rem] px-[1.0638rem]' : 'py-[0.813rem] px-[1.13rem]'}`}
      >
        <div className={`${icon && 'flex justify-between'} text-white h-10`}>
          <div>
            <p className="font-semibold text-sm">{korName}</p>
            <p className="text-xs font-light">{engName}</p>
          </div>
          {icon && (
            <Image
              src="arrowRight.svg"
              alt="arrowIcon"
              width={23}
              height={23}
            />
          )}
        </div>
        <div className="border-[0.0313rem] border-white" />
      </Link>
      {imgSrc && (
        <Image
          className="z-10 absolute bottom-0 right-0"
          src={imgSrc}
          height={100}
          width={100}
          alt="categoryImg"
        />
      )}
    </div>
  );
}

export default LinkButton;
