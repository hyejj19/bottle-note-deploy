import Image from 'next/image';

const Star = () => {
  return (
    <div className="flex items-center space-x-1 justify-self-end">
      <Image src="/star.svg" width={18} height={18} alt="star" />
      <div className="font-bold text-lg text-subCoral">3.0</div>
    </div>
  );
};

export default Star;
