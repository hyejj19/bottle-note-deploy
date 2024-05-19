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

  return (
    <>
      <CategorySelector
        selectedCategory={currentCategory}
        handleCategory={handleCategory}
      />

      <section>
        <List>
          <List.Manager displayValue="인기순" />
          {MOCK_LIST_ITEM.map((item: any) => (
            <List.Item key={item.whiskyId} data={item} />
          ))}
        </List>
      </section>
    </>
  );
}
