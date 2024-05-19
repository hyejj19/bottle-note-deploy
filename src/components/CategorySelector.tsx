'use client';

import React, { useEffect, useRef } from 'react';
import { CATEGORY_MENUS } from '@/constants/common';
import CategoryTitle from './CategoryTitle';

interface Props {
  selectedCategory: string;
  handleCategory: (value: string) => void;
}

function CategorySelector({ selectedCategory, handleCategory }: Props) {
  const categories = Object.values(CATEGORY_MENUS).map((category) => ({
    kor: category.kor,
    eng: category.eng,
  }));

  const selectedRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  }, [selectedCategory]);

  return (
    <section className="space-y-4">
      <CategoryTitle subTitle="카테고리" />
      <article className="whitespace-nowrap overflow-x-auto flex space-x-1.5">
        {categories.map((category) => {
          return (
            <button
              key={category.eng}
              className={`${selectedCategory === category.eng ? 'label-selected' : 'label-default'} px-2.5 py-1`}
              onClick={() => handleCategory(category.eng)}
              ref={category.eng === selectedCategory ? selectedRef : null}
            >
              <span className="text-sm font-light">{category.kor}</span>
            </button>
          );
        })}
      </article>
    </section>
  );
}

export default CategorySelector;
