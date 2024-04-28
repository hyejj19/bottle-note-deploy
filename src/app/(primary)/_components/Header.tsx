'use client';

import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  const handleSearch = (value: string) => {
    console.log('Search', value);
  };

  return (
    <div className="py-[2rem] px-5 space-y-4 bg-subCoral">
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          scrollPosition > 0 ? 'opacity-0 delay-150' : 'opacity-100'
        }`}
      >
        <p className="text-2xl text-bgGray">
          Journey Note for
          <br />
          find my bottle
        </p>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${
          scrollPosition > 0 ? 'pt-10' : ''
        }`}
      >
        <SearchBar type="Link" handleSearch={handleSearch} />
      </div>
    </div>
  );
}
