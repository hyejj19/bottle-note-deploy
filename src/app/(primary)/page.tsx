'use client';

import React from 'react';
import SearchBar from '@/components/SearchBar';
import PostCard from '@/components/PostCard';
import Navbar from '@/components/Navbar';

export default function Home() {
  const handleSearch = (value: string) => {
    console.log('Search', value);
  };

  const weeklyData: {
    name: string;
    rating: string;
    category: string;
  }[] = [
    {
      name: 'Johnnie Walker Blue Label',
      rating: '3.5',
      category: 'WHISKY',
    },
    {
      name: 'Monkey Shoulder',
      rating: '4',
      category: 'WHISKY',
    },
    {
      name: 'Royal Salute',
      rating: '4.1',
      category: 'WHISKY',
    },
    {
      name: 'The Glenlivet 18years',
      rating: '3.5',
      category: 'WHISKY',
    },
    {
      name: 'Chivas Regal 18years',
      rating: '3.5',
      category: 'WHISKY',
    },
    {
      name: 'The Macallan 12years',
      rating: '3.5',
      category: 'WHISKY',
    },
  ];

  return (
    <div className="space-y-5 relative">
      <div className="space-y-4 bg-sub p-5">
        <p className="text-2xl text-bgGray">
          Journey Note for
          <br />
          find my bottle
        </p>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div>
        <h1 className="font-bold text-2xl">WEEKLY TOP5</h1>
        <div className="whitespace-nowrap overflow-x-auto flex space-x-1">
          {weeklyData.map((item) => {
            return (
              <div key={item.name} className="flex-shrink-0">
                <PostCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl">CATEGORY</h1>
      </div>
      <div className="fixed bottom-0 w-full max-w-[400px]">
        <Navbar />
      </div>
    </div>
  );
}

// fixed bottom-0
