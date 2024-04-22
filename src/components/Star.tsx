import Image from 'next/image';

interface Props {
  size?: number;
  rating: number;
}

const Star = ({ size = 18, rating }: Props) => {
  return (
    <div className="flex items-center space-x-1 justify-self-end">
      <Image src="/star.svg" width={size} height={size} alt="star" />
      <div className="font-bold text-lg text-subCoral">{rating}</div>
    </div>
  );
};

export default Star;
