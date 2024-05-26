import React from 'react';
import BackDrop from '@/components/BackDrop';

interface Props {
  handleClose: () => void;
}

function ReportModal({ handleClose }: Props) {
  const MOCK_OPTIONS = ['리뷰 신고', '유저 신고'];
  const type = '신고하기';
  return (
    <BackDrop isShow>
      <div className="w-full h-full flex flex-col justify-end items-center px-4 gap-3 pb-2">
        <section className="w-full bg-white rounded-xl divide-y">
          <article className="py-4 text-center text-mainGray text-sm">
            {type}
          </article>
          {MOCK_OPTIONS.map((option) => (
            <article key={option} className="py-4 text-center text-subCoral">
              {option}
            </article>
          ))}
        </section>
        <button
          className="w-full bg-white rounded-xl py-4"
          onClick={handleClose}
        >
          닫기
        </button>
      </div>
    </BackDrop>
  );
}

export default ReportModal;
