import React from 'react';
import { StaticImageData } from 'next/image';
import LinkButton from '@/components/LinkButton';
import whiskeyImg from 'public/category_whisky1.png';

function CategoryList() {
  const linkData: {
    listType?: 'Full' | 'Half';
    engName: string;
    korName: string;
    linkSrc: string;
    imgSrc?: StaticImageData;
  }[] = [
    {
      engName: 'Single malt',
      korName: '싱글몰트',
      listType: 'Half',
      linkSrc: '/search/singleMalt',
      imgSrc: whiskeyImg,
    },
    {
      engName: 'Blended malt',
      korName: '블렌디드 몰트',
      listType: 'Half',
      linkSrc: '/search/singleMalt',
      imgSrc: whiskeyImg,
    },
    {
      engName: 'Blended',
      korName: '블렌디드',
      listType: 'Half',
      linkSrc: '/search/singleMalt',
      imgSrc: whiskeyImg,
    },
    {
      engName: 'America(Bourbon)',
      korName: '아메리카(버번)',
      listType: 'Half',
      linkSrc: '/search/singleMalt',
      imgSrc: whiskeyImg,
    },
    {
      engName: 'Rye',
      korName: '라이',
      listType: 'Half',
      linkSrc: '/search/singleMalt',
      imgSrc: whiskeyImg,
    },
    {
      engName: 'Other',
      korName: '기타',
      listType: 'Half',
      linkSrc: '/search/singleMalt',
      imgSrc: whiskeyImg,
    },
  ];
  return (
    <div className="space-y-3">
      <LinkButton
        data={{
          engName: 'ALL',
          korName: '전체',
          linkSrc: '/search/all',
        }}
      />
      <div className="grid grid-cols-2 gap-3">
        {linkData.map((data) => (
          <LinkButton key={data.engName} data={data} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
