import React from 'react';
import { Alcohol } from '@/types/Alcohol';
import HorizontalItem from './HorizontalItem';

interface Props {
  data: Alcohol[];
}

export default function HorizontalScroll({ data }: Props) {
  return (
    <div className="whitespace-nowrap overflow-x-auto flex space-x-2">
      {data.map((item) => {
        return (
          <div key={item.whiskyId} className="flex-shrink-0">
            <HorizontalItem data={item} />
          </div>
        );
      })}
    </div>
  );
}
