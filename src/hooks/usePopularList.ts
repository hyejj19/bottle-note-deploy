import { useLayoutEffect, useState } from 'react';
import { AlcoholsApi } from '@/app/api/AlcholsApi';
import { AlcoholAPI } from '@/types/Alcohol';

export const usePopularList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [populars, setPopulars] = useState<(AlcoholAPI & { path: string })[]>(
    [],
  );

  useLayoutEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await AlcoholsApi.getPopular();

      setPopulars(result);
      setIsLoading(false);
    })();
  }, []);

  return { popularList: populars, isLoading };
};
