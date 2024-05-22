export interface Review {
  userId: number;
  imageUrl: null | string; // 다음주 server 확인 예정
  nickName: string;
  reviewId: number;
  reviewContent: string;
  rating: number;
  sizeType: string; // "BOTTLE", "GLASS"
  price: number;
  viewCount: number;
  likeCount: number;
  isMyLike: boolean;
  replyCount: number;
  isMyReply: boolean;
  status: 'PUBLIC' | 'PRIVATE';
  reviewImageUrl: null | string;
  createAt: string;
}
