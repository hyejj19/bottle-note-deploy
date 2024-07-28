import { useRef } from 'react';
import Image from 'next/image';

interface StarProps {
  size: number;
  index: number;
  rate: number;
  handleRate: (rate: number) => void;
}

const Star = ({ size = 30, index, rate, handleRate }: StarProps) => {
  const imageRef = useRef<HTMLImageElement>(null);

  // TODO: + 마우스 무브, 터치까지 대응되도록 수정
  const handleAction = (event: React.MouseEvent) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const { width } = rect;

      if (x < width / 3) {
        handleRate(index - 1);
      } else if (x < (2 * width) / 3) {
        handleRate(index - 0.5);
      } else {
        handleRate(index);
      }
    }
  };

  let src = '/icon/star-outlined-subcoral.svg';
  if (rate >= index) {
    src = '/icon/star-filled-subcoral.svg';
  } else if (rate === index - 0.5) {
    src = '/icon/star-half-subcoral.svg';
  }

  // FIXME: 별점 렌더링시 약간의 위치 움직임 있음
  return (
    <div onClick={handleAction}>
      <Image
        src={src}
        width={size}
        height={size}
        alt="star"
        ref={imageRef}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

interface StarRatingProps {
  size?: number;
  rate: number;
  handleRate: (rate: number) => void;
}

const StarRating = ({ size = 30, rate, handleRate }: StarRatingProps) => {
  const maxRating = 10;

  return (
    <div className="relative w-full h-full">
      <div className="flex space-x-1">
        {Array.from({ length: maxRating / 2 }, (_, i) => (
          <Star
            key={i}
            size={size}
            index={i + 1}
            rate={rate}
            handleRate={handleRate}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
