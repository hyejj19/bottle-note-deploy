import { StaticImageData } from 'next/image';

export interface LinkData {
  listType?: 'Full' | 'Half';
  engName: string;
  korName: string;
  linkSrc: string;
  imgSrc?: StaticImageData;
  icon?: boolean;
}
