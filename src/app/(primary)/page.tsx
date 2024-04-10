'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import CategoryTitle from '@/components/CategoryTitle';
import HorizontalScroll from '@/components/HorizontalScroll';
import Header from '@/app/(primary)/_components/Header';

export default function Home() {
  const weeklyData: {
    name: string;
    rating: number;
    category: string;
    url: string;
  }[] = [
    {
      name: 'Johnnie Walker Blue Label',
      rating: 3.5, // 서버에서 어떤 형태로 줄건지 확인 필요
      category: 'WHISKY', // 어떤 값으로 카테고리가 오는지 확인 필요
      url: '/detail/1', // server에서 data를 받은 후 가공 필요
    },
    {
      name: 'Monkey Shoulder',
      rating: 4,
      category: 'WHISKY',
      url: '/detail/1',
    },
    {
      name: 'Royal Salute',
      rating: 4.1,
      category: 'WHISKY',
      url: '/detail/1',
    },
    {
      name: 'The Glenlivet 18years',
      rating: 3.5,
      category: 'WHISKY',
      url: '/detail/1',
    },
    {
      name: 'Chivas Regal 18years',
      rating: 3.5,
      category: 'WHISKY',
      url: '/detail/1',
    },
  ];

  return (
    <div className="space-y-1 relative">
      <Header />
      <section className="px-[1.9rem] pb-16">
        <article className="py-2 space-y-3">
          <CategoryTitle subTitle="주간 HOT5" />
          <HorizontalScroll data={weeklyData} />
        </article>
        <article className="py-2 space-y-3">
          <CategoryTitle subTitle="카테고리" />
        </article>
      </section>
      <Navbar />
    </div>
  );
}
