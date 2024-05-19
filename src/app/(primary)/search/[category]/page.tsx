'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { MOCK_LIST_ITEM } from 'mock/alcohol';
import CategorySelector from '@/components/CategorySelector';
import List from '@/components/List/List';

export default function Category() {
  const router = useRouter();
  const currentCategory = usePathname().split('/')[2].replace('%20', ' ');
  const handleCategory = (value: string) => {
    router.push(`/search/${value}`);
  };

  const SORT_OPTIONS = ['인기도순', '별점순', '찜하기순', '댓글순'];
  const FILTER_OPTIONS = [
    '국가/전체',
    '스코틀랜드/로우랜드',
    '스코틀랜드/하이랜드',
  ]; // TODO: 국가 정보 조회하여 불러와야됌

  return (
    <>
      <CategorySelector
        selectedCategory={currentCategory}
        handleCategory={handleCategory}
      />

      <section>
        <List>
          <List.Manager
            total={52}
            sortOptions={SORT_OPTIONS}
            hanldeSortOption={(value) => console.log(value)}
            filterOptions={FILTER_OPTIONS}
          />
          {MOCK_LIST_ITEM.map((item: any) => (
            <List.Item key={item.whiskyId} data={item} />
          ))}
        </List>
      </section>
    </>
  );
}
