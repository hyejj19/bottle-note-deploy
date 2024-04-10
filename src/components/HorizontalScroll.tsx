import React from 'react';
import HorizontalItem from './HorizontalItem';

type Props = {
  data: {
    name: string;
    rating: number;
    category: string;
    url: string;
  }[];
};

export default function HorizontalScroll({ data }: Props) {
  return (
    <div className="whitespace-nowrap overflow-x-auto flex space-x-2">
      {data.map((item) => {
        return (
          <div key={item.name} className="flex-shrink-0">
            <HorizontalItem data={item} />
          </div>
        );
      })}
    </div>
  );
}
