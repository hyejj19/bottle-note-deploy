'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SearchHistoryService } from '@/lib/SearchHistoryService';
import DeleteIcon from 'public/icon/close-subcoral.svg';

interface Props {
  handleSearch: (keyword: string) => void;
}

export default function RecentSearch({ handleSearch }: Props) {
  const SearchHistory = new SearchHistoryService();
  const [list, setList] = useState(SearchHistory.get());

  const handleDeleteAll = () => {
    SearchHistory.removeAll();
    setList(SearchHistory.get());
  };

  const handleDeleteOne = (keyword: string) => {
    SearchHistory.removeOne(keyword);
    setList(SearchHistory.get());
  };

  return (
    <section className=" bg-white w-full h-full z-100">
      <h2 className="text-sm font-bold text-subCoral">최근 검색어</h2>
      <article className="text-xs my-3 border-t border-subCoral">
        {list.map((text, idx) => (
          <article
            className="flex justify-between items-center py-3 text-subCoral border-b border-subCoral"
            key={`${text}_${idx}`}
          >
            <span onMouseDown={() => handleSearch(text)}>{text}</span>
            <button onMouseDown={() => handleDeleteOne(text)}>
              <Image src={DeleteIcon} alt="delete" />
            </button>
          </article>
        ))}
      </article>

      <article className="flex flex-col items-start gap-2">
        {list.length === 0 && (
          <span className="text-xs text-mainGray">최근 검색어가 없습니다.</span>
        )}
      </article>

      {list.length > 0 && (
        <button
          className="text-xxs text-mainGray"
          onMouseDown={handleDeleteAll}
        >
          전체기록삭제
        </button>
      )}
    </section>
  );
}
