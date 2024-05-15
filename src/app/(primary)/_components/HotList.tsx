'use client';

import React, { useEffect, useState } from 'react';
import { AlcoholAPI, Alcohol } from '@/types/Alcohol';
import HorizontalItem from '@/components/HorizontalItem';

function HotList() {
  const [weeklyData, setWeeklyData] = useState<[] | Alcohol[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/popular/week`,
        );
        if (response.ok) {
          const result = await response.json();
          if (result.data.totalCount !== 0) {
            const formattedData = result.data?.alcohols.map(
              (alcohol: AlcoholAPI) => ({
                whiskyId: alcohol.whiskyId,
                korName: alcohol.korName,
                engName: alcohol.engName,
                rating: alcohol.rating,
                engCategory: alcohol.engCategory,
                imageUrl: alcohol.imageUrl,
                path: `/search/${alcohol.whiskyId}`,
              }),
            );
            setWeeklyData(formattedData);
          }
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {weeklyData.length !== 0 && (
        <div className="whitespace-nowrap overflow-x-auto flex space-x-2">
          {weeklyData.map((item) => {
            return (
              <div key={item.whiskyId} className="flex-shrink-0">
                <HorizontalItem data={item} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default HotList;
