import Image from 'next/image';

const LikeBtn = () => {
  return (
    <button className="justify-self-end row-start-3">
      <Image src="/like-outline.svg" width={20} height={20} alt="좋아요" />
    </button>
  );
};

export default LikeBtn;
