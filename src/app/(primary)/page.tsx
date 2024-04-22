'use client';

import React from 'react';
import CategoryTitle from '@/components/CategoryTitle';
import HorizontalScroll from '@/components/HorizontalScroll';
import Header from '@/app/(primary)/_components/Header';
import { Alcohol } from '@/types/Alcohol';
import CategoryList from './_components/CategoryList';

export default function Home() {
  const weeklyData: Alcohol[] = [
    {
      whisky_id: 1,
      kor_name: '조니워커 블루라벨',
      eng_name: 'Johnnie Walker Blue Label',
      rating: 3.5,
      category: 'Single malt',
      image_path: '',
      path: '/detail/1', // server에서 data를 받은 후 가공 필요
    },
    {
      whisky_id: 2,
      kor_name: '조니워커 블루라벨',
      eng_name: 'Johnnie Walker Blue Label',
      rating: 3.5,
      category: 'Single malt',
      image_path: '',
      path: '/detail/1', // server에서 data를 받은 후 가공 필요
    },
    {
      whisky_id: 3,
      kor_name: '조니워커 블루라벨',
      eng_name: 'Johnnie Walker Blue Label',
      rating: 3.5,
      category: 'Single malt',
      image_path: '',
      path: '/detail/1', // server에서 data를 받은 후 가공 필요
    },
    {
      whisky_id: 4,
      kor_name: '조니워커 블루라벨',
      eng_name: 'Johnnie Walker Blue Label',
      rating: 3.5,
      category: 'Single malt',
      image_path: '',
      path: '/detail/1', // server에서 data를 받은 후 가공 필요
    },
    {
      whisky_id: 5,
      kor_name: '조니워커 블루라벨',
      eng_name: 'Johnnie Walker Blue Label',
      rating: 3.5,
      category: 'Single malt',
      image_path: '',
      path: '/detail/1', // server에서 data를 받은 후 가공 필요
    },
  ];

  return (
    <div className="space-y-1 relative">
      <Header />
      <section className="px-5 pb-20">
        <article className="py-2 space-y-4">
          <CategoryTitle subTitle="위클리 HOT 5" />
          <HorizontalScroll data={weeklyData} />
        </article>
        <article className="py-2 space-y-4">
          <CategoryTitle subTitle="카테고리" />
          <CategoryList />
        </article>
      </section>
    </div>
  );
}
