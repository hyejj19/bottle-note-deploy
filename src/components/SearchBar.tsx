'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  handleSearch: (value: string) => void;
};

export default function SearchBar({ handleSearch }: Props) {
  const [searchText, setSearchText] = useState<string>('');

  const handleOnClick = () => {
    handleSearch(searchText);
  };

  return (
    <div className="space-x-1 flex relative">
      <input
        type="text"
        className="w-full bg-bgGray rounded-lg h-10 pl-4 pr-12 outline-none text-main placeholder-main"
        placeholder="어떤 술을 찾고 계신가요?"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleOnClick();
          }
        }}
      />
      <button
        className="px-2 w-10 absolute top-0 right-1 h-full"
        onClick={handleOnClick}
      >
        <Image src="search.svg" width={80} height={80} alt="search button" />
      </button>
    </div>
  );
}
