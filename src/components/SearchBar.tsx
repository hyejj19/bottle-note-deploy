'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  type?: 'Link' | 'Search';
  handleSearch: (value: string) => void;
}

export default function SearchBar({ type = 'Search', handleSearch }: Props) {
  const [searchText, setSearchText] = useState<string>('');

  const handleOnClick = () => {
    handleSearch(searchText);
  };

  return (
    <div className="relative">
      {type === 'Link' ? (
        <Link href="/search" className="relative">
          <div className="w-full flex items-center bg-bgGray rounded-lg h-10 pl-4 pr-12 drop-shadow-[0_3px_3px_rgba(0,0,0,0.30)] hover:pointer">
            <p className="absolute t-0 text-mainGray">
              어떤 술을 찾고 계신가요?
            </p>
            <div className="w-6 absolute right-3 hover:pointer">
              <Image
                src="search.svg"
                width={50}
                height={50}
                alt="search button"
              />
            </div>
          </div>
        </Link>
      ) : (
        <>
          <input
            type="text"
            className="w-full bg-bgGray rounded-lg h-10 pl-4 pr-12 drop-shadow-[0_3px_3px_rgba(0,0,0,0.30)] outline-none text-mainCoral placeholder-mainGray"
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
            <Image
              src="search.svg"
              width={80}
              height={80}
              alt="search button"
            />
          </button>
        </>
      )}
    </div>
  );
}
