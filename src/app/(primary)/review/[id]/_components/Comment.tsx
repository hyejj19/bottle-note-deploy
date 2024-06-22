'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { truncStr } from '@/utils/truncStr';
import { formatDate } from '@/utils/formatDate';
import { StaticImageData } from 'next/image';
import userImg from 'public/user_img.png';
import Label from '@/app/(primary)/_components/Label';
import ReportModal from '@/app/(primary)/_components/ReportModal';

interface Props {
  data: {
    userId: string;
    nickName: string;
    comment: string;
    createAt: string;
    userImg: StaticImageData;
  };
}

function Comment({ data }: Props) {
  const { userId, nickName, comment, createAt } = data;
  const [isOptionShow, setIsOptionShow] = useState(false);
  const handleOptionsShow = () => {
    setIsOptionShow((prev) => !prev);
  };
  return (
    <>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          {/* <Link href={`/user/${userId}`}> */}
          <div className="flex items-center space-x-1">
            <div className="w-[1.4rem] h-[1.4rem] rounded-full overflow-hidden">
              <Image
                className="object-cover"
                src={userImg}
                alt="user_img"
                width={22}
                height={22}
              />
            </div>
            <p className="text-mainGray text-10">{truncStr(nickName, 12)}</p>
            <Label
              name={'리뷰 작성자'}
              style="border-mainCoral text-mainCoral px-1.5 py-0.5 rounded text-9"
            />
          </div>
          {/* </Link> */}
          <div className="flex justify-between">
            <p className="text-mainGray text-10">{formatDate(createAt)}</p>
            <button
              className="cursor-pointer"
              onClick={() => {
                setIsOptionShow(true);
              }}
            >
              <Image
                src={'/icon/ellipsis-darkgray.svg'}
                width={10}
                height={10}
                alt="report"
              />
            </button>
          </div>
        </div>
        <div className="text-10 text-mainDarkGray">{comment}</div>
      </div>
      {isOptionShow && <ReportModal handleClose={handleOptionsShow} />}
    </>
  );
}

export default Comment;
