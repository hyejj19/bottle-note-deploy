import {
  AlcoholAPI,
  RegionApi,
  AlcoholDetails,
  PickPutApi,
} from '@/types/Alcohol';
import { ApiResponse } from '@/types/common';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const AlcoholsApi = {
  async getPopular() {
    const response = await fetch(`/bottle-api/popular/week`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const result: ApiResponse<{ alcohols: AlcoholAPI[] }> =
      await response.json();

    const formattedData = result.data.alcohols.map((alcohol: AlcoholAPI) => {
      return {
        ...alcohol,
        path: `/search/${alcohol.engCategory}/${alcohol.alcoholId}`,
      };
    });

    return formattedData;
  },

  async getRegion() {
    const response = await fetch(`/bottle-api/regions`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const result: ApiResponse<RegionApi[]> = await response.json();

    const regions = result.data.map((region) => {
      return {
        id: region.regionId,
        value: region.korName,
      };
    });

    regions.unshift({ id: -1, value: '국가(전체)' });

    return regions;
  },

  async getAlcoholDetails(alcoholId: string) {
    const response = await fetch(`/bottle-api/alcohols/${alcoholId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const result: ApiResponse<AlcoholDetails> = await response.json();

    return result.data;
  },

  async putPick(alcoholId: string | number, isPicked: boolean) {
    const response = await fetchWithAuth(`/bottle-api/picks`, {
      method: 'PUT',
      body: JSON.stringify({
        alcoholId,
        isPicked: isPicked ? 'PICK' : 'UNPICK',
      }),
    });

    const result: ApiResponse<PickPutApi> = await response.data;
    return await result;
  },
};
