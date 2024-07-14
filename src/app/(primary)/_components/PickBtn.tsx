'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { AlcoholsApi } from '@/app/api/AlcholsApi';

interface Props {
  isPicked: boolean;
  setIsPicked: React.Dispatch<React.SetStateAction<boolean>>;
  pickBtnName?: string;
  iconColor?: 'white' | 'subcoral';
  size?: number;
  alcoholId: number;
}

const PickBtn = ({
  isPicked,
  setIsPicked,
  alcoholId,
  pickBtnName,
  iconColor = 'white',
  size = 14,
}: Props) => {
  const { data: session } = useSession();
  const handleClick = async () => {
    if (!session) {
      alert('로그인이 필요한 서비스입니다.');
      return;
    } else {
      const originalIsPicked = isPicked;
      setIsPicked(!isPicked);
      try {
        await AlcoholsApi.putPick(alcoholId, !isPicked);
      } catch (error) {
        alert('업데이트에 실패했습니다. 다시 시도해주세요.');
        console.error('Error updating pick status:', error);
        setIsPicked(originalIsPicked);
      }
    }
  };
  return (
    <button
      className={
        pickBtnName
          ? 'flex items-center space-x-1'
          : 'justify-self-end row-start-3'
      }
      onClick={handleClick}
    >
      {isPicked ? (
        <Image
          src={`/icon/pick-outlined-${iconColor}.svg`}
          width={size}
          height={size}
          alt="좋아요"
        />
      ) : (
        <Image
          src={`/icon/pick-filled-${iconColor}.svg`}
          width={size}
          height={size}
          alt="좋아요"
        />
      )}
      {pickBtnName && <p className="text-10">{pickBtnName}</p>}
    </button>
  );
};

export default PickBtn;
