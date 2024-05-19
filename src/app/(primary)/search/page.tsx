'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_LIST_ITEM } from 'mock/alcohol';
import CategorySelector from '@/components/CategorySelector';
import CategoryTitle from '@/components/CategoryTitle';
import List from '@/components/List/List';

export default function Search() {
  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useState('All');
  const handleCategory = (value: string) => {
    if (value !== currentCategory) router.push(`/search/${value}`);
    setCurrentCategory(value);
  };

  // TODO: HOT5 데이터 가져오는 코드 여기 추가

  return (
    <>
      <CategorySelector
        selectedCategory={currentCategory}
        handleCategory={handleCategory}
      />

      <section>
        <CategoryTitle subTitle="위클리 HOT 5" />
        <List>
          {MOCK_LIST_ITEM.map((item: any) => (
            <List.Item key={item.whiskyId} data={item} />
          ))}
        </List>
      </section>
    </>
  );
}
