'use client';

import Image from 'next/image';
import ArrowDownIcon from 'public/Arrow-Down_Sub_Coral.svg';
import DescendingIcon from 'public/Descending_Sub_Coral.svg';

interface Props {
  total: number;
  sortOptions: string[];
  hanldeSortOption: (value: string) => void;
  filterOptions?: string[];
}

// SORT, ORDER(Ascending, Descending), FILTER,
const ListManager = ({
  total,
  sortOptions,
  filterOptions,
  hanldeSortOption,
}: Props) => {
  return (
    <article className="flex justify-between items-center text-mainGray text-sm pb-3.25 border-mainBlack border-b">
      <span className="text-xs text-mainGray">{`총 ${total}개`}</span>
      <div className="flex gap-1.5 ">
        <button>
          <Image src={DescendingIcon} alt="내림차순" />
        </button>
        <button
          className="label-default flex items-center gap-1 px-2.5 py-1 rounded-md text-xxs"
          onClick={() => alert('하단 bottom sheet 으로 옵션 표시')}
        >
          <span>{sortOptions[0]}</span>
          <Image src={ArrowDownIcon} alt="정렬" />
        </button>

        {filterOptions && (
          <button
            className="label-default flex items-center gap-1 px-2.5 py-1 rounded-md text-xxs"
            onClick={() => alert('하단 bottom sheet 으로 옵션 표시')}
          >
            <span>{filterOptions[0]}</span>
            <Image src={ArrowDownIcon} alt="필터" />
          </button>
        )}
      </div>
    </article>
  );
};

export default ListManager;
