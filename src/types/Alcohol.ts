// category는 정확히 정해지면 타입 지정하기
export interface AlcoholAPI {
  whiskyId: number;
  korName: string;
  engName: string;
  rating: number;
  engCategory: string;
  korCategory: string;
  imageUrl: string;
}
export interface Alcohol extends AlcoholAPI {
  path: string;
}
