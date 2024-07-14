'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

interface Props {
  isLiked: boolean;
  setIsLiked: React.Dispatch<React.SetStateAction<boolean>>;
  likeBtnName?: string;
  setLikedCount?: React.Dispatch<React.SetStateAction<number>>;
  likeIconColor?: 'white' | 'subcoral';
  unLikeIconColor?: 'gray' | 'subcoral';
  size?: number;
}

const LikeBtn = ({
  isLiked,
  setIsLiked,
  likeBtnName,
  setLikedCount,
  unLikeIconColor = 'gray',
  likeIconColor = 'subcoral',
  size = 14,
}: Props) => {
  const { data: session } = useSession();
  const handleClick = async () => {
    if (!session) {
      alert('로그인이 필요한 서비스입니다.');
      return;
    } else {
      const originalIsLiked = isLiked;
      setIsLiked(!isLiked);
      setLikedCount &&
        setLikedCount((prevCount) => {
          return prevCount + 1;
        });
      try {
        // api 호출
      } catch (error) {
        alert('업데이트에 실패했습니다. 다시 시도해주세요.');
        console.error('Error updating like status:', error);
        setIsLiked(originalIsLiked);
        setLikedCount &&
          setLikedCount((prevCount) => {
            return prevCount - 1;
          });
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
