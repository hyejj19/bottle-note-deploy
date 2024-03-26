import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img from '../../public/dummy-img1.jpeg';

type Props = {
  data: {
    name: string;
    rating: string;
    category: string;
  };
};

export default function PostCard({ data }: Props) {
  const { name, rating, category } = data;
  return (
    <div className="w-32 h-[17.5rem] mx-1">
      <Link href="/" className="space-y-2">
        <div className="w-32 h-[12rem]">
          <Image src={img} alt="img" />
        </div>
        <div className="px-2 space-y-2">
          <div className="text-sm h-8 whitespace-normal">{name}</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 h-8">
              <Image src="star.svg" width={20} height={20} alt="star" />
              <div className="font-semibold">{rating}</div>
            </div>
            <p className="text-xs">{category}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
