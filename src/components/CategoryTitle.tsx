import React from 'react';

type Props = {
  subTitle: string;
};

function CategoryTitle({ subTitle }: Props) {
  return (
    <div className="border-b-[0.1rem] border-subCoral">
      <div className="w-40 bg-bgGray text-center rounded-tl-lg rounded-tr-lg py-1">
        <p className="text-base font-semibold text-subCoral">{subTitle}</p>
      </div>
    </div>
  );
}

export default CategoryTitle;
