import Star from '@/components/Star';
import { truncStr } from '@/utils/truncStr';
import LikeBtn from '@/app/(primary)/user/[id]/_components/LikeBtn';
import { addNewLine } from '@/utils/addNewLine';
import ItemImage from './_components/ItemImage';
import ItemInfo from './_components/ItemInfo';
import { AlcoholAPI } from '@/types/Alcohol';
import Link from 'next/link';

interface Props {
  data: AlcoholAPI;
}

const ListItem = ({ data }: Props) => {
  const {
    korCategory,
    engCategory,
    korName,
    engName,
    imageUrl,
    rating,
    isPicked,
    ratingCount,
    alcoholId,
  } = data;

  return (
    <Link href={`/search/${engCategory}/${alcoholId}`}>
      <article className="flex items-center space-x-2 text-mainBlack border-mainBlack border-b h-[90px]">
        <ItemImage src={imageUrl} alt="위스키 이미지" />
        <section className="flex-1 space-y-1">
          <ItemInfo
            korName={addNewLine(korName)}
            engName={truncStr(engName, 16)}
            korCategory={korCategory}
          />
          <article className="flex justify-between">
            <div className="flex flex-col">
              <Star rating={rating} />
              {ratingCount && (
                <span className="text-[0.625rem] justify-self-end row-start-2 text-right">
                  {`${ratingCount}`}
                </span>
              )}
            </div>
            <div className="space-x-1.5 flex items-center">
              <LikeBtn isLiked={isPicked} />
            </div>
          </article>
        </section>
      </article>
    </Link>
  );
};

export default ListItem;
