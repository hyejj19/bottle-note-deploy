'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

interface Props {
  isLiked: boolean;
  likeBtnName?: string;
  handleUpdateLiked: () => void;
  handleRollback: () => void;
  handleNotLogin: () => void;
  likeIconColor?: 'white' | 'subcoral';
  unLikeIconColor?: 'gray' | 'subcoral';
  size?: number;
}

const LikeBtn = ({
  isLiked,
  likeBtnName,
  handleUpdateLiked,
  handleRollback,
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
        // api 호출
      } catch (error) {
        alert('업데이트에 실패했습니다. 다시 시도해주세요.');
        console.error('Error updating like status:', error);
        handleRollback();
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
