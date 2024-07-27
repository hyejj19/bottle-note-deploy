'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { ReviewApi } from '@/app/api/ReviewApi';

interface Props {
  reviewId: string | number;
  isLiked: boolean;
  likeBtnName?: string;
  handleUpdateLiked: () => void;
  handleError: () => void;
  handleNotLogin: () => void;
  likeIconColor?: 'white' | 'subcoral';
  unLikeIconColor?: 'gray' | 'subcoral';
  size?: number;
}

const LikeBtn = ({
  reviewId,
  isLiked,
  likeBtnName,
  handleUpdateLiked,
  handleError,
  handleNotLogin,
  unLikeIconColor = 'gray',
  likeIconColor = 'subcoral',
  size = 14,
}: Props) => {
  const { data: session } = useSession();
  const handleClick = async () => {
    if (!session) {
      handleNotLogin();
    } else {
      handleUpdateLiked();
      try {
        await ReviewApi.putLike(reviewId, !isLiked);
      } catch (error) {
        alert('업데이트에 실패했습니다. 다시 시도해주세요.');
        console.error('Error updating like status:', error);
        handleError();
      }
    }
  };

  return (
    <button
      className={
        likeBtnName
          ? 'flex items-center space-x-1'
          : 'justify-self-end row-start-3'
      }
      onClick={handleClick}
    >
      {isLiked ? (
        <Image
          src={`/icon/thumbup-filled-${likeIconColor}.svg`}
          width={size}
          height={size}
          alt="좋아요"
        />
      ) : (
        <Image
          src={`/icon/thumbup-outlined-${unLikeIconColor}.svg`}
          width={size}
          height={size}
          alt="좋아요"
        />
      )}
      {likeBtnName && (
        <p className="text-mainGray font-bold text-10">{likeBtnName}</p>
      )}
    </button>
  );
};

export default LikeBtn;
