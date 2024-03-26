'use client';

import React, { useState } from 'react';

type Props = {
  handleSearch: (value: string) => void;
};

export default function SearchBar({ handleSearch }: Props) {
  const [searchText, setSearchText] = useState<string>('');

  const handleOnClick = () => {
    handleSearch(searchText);
  };

  return (
    <div className="space-x-1 flex">
      <input
        type="text"
        className="border w-full"
        placeholder="어떤 술을 찾고 계신가요?"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button className="border px-2 w-14" onClick={handleOnClick}>
        검색
      </button>
    </div>
  );
}
