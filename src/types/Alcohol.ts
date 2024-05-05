// category는 정확히 정해지면 타입 지정하기
export interface AlcoholAPI {
  whiskyId: number;
  korName: string;
  engName: string;
  rating: number;
  category: string;
  imageUrl: string;
}
export interface Alcohol extends AlcoholAPI {
  path: string;
}

// 변경 예정
// kor_category: 싱글몰트;
// eng_category: single - molt;
