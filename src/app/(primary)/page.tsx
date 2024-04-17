'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import CategoryTitle from '@/components/CategoryTitle';
import HorizontalScroll from '@/components/HorizontalScroll';
import Header from '@/app/(primary)/_components/Header';
import CategoryList from './_components/CategoryList';

export default function Home() {
  //  whisky_id, eng_name, rating, category
  const weeklyData: {
    name: string;
    rating: number;
    category: string;
    url: string;
  }[] = [
    {
      name: 'Johnnie Walker Blue Label',
      rating: 3.5,
      category: 'WHISKY',
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
      <section className="px-5 pb-20">
        <article className="py-2 space-y-3">
          <CategoryTitle subTitle="주간 HOT5" />
          <HorizontalScroll data={weeklyData} />
        </article>
        <article className="py-2 space-y-3">
          <CategoryTitle subTitle="카테고리" />
          <CategoryList />
        </article>
      </section>
      <Navbar />
    </div>
  );
}
