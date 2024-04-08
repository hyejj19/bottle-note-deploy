import React from 'react';
import ListItem from './_components/ListItem';

// TODO: mock데이터 생성 및 연결
export default function User() {
  return (
    <main className="w-full h-full text-mainBlack">
      <section className="bg-bgGray p-7.5 pb-11.5">
        <article className="flex justify-between pb-6">
          <div>Bottle Note</div>
          <button>Menu btn</button>
        </article>

        <section className="flex space-x-5.25 py-8.75 border-b border-t border-subCoral">
          <div className="w-24 h-24 flex justify-center items-center border border-subCoral rounded-full">
            프로필 이미지
          </div>
          <article className="space-y-2.5">
            <h1 className="text-3xl font-bold">김보틀</h1>
            <div className="flex flex-col">
              <p className="text-sm">
                <strong>FOLLOWER </strong>
                <span>323</span>
              </p>
              <p className="text-sm">
                <strong>FOLLOWING </strong>
                <span>12</span>
              </p>
            </div>

            <div className="space-x-1 text-sm">
              <button className="bg-subCoral px-2.5 py-1 rounded-md text-white">
                팔로잉
              </button>
              <button className="bg-white border border-subCoral px-2.5 py-1 rounded-md text-subCoral">
                프로필 수정
              </button>
              <button className="bg-white border border-subCoral px-2.5 py-1 rounded-md text-subCoral">
                공유
              </button>
            </div>
          </article>
        </section>

        <article className="flex justify-center pt-2.75 divide-x divide-subCoral divide-opacity-30 text-fontBurgundy">
          <p className="flex flex-col items-center px-8.5">
            <span className="text-[2.125rem] font-bold text-[#DF762A]">53</span>
            <span className="text-sm">별점</span>
          </p>
          <p className="flex flex-col items-center px-8.5">
            <span className="text-[2.125rem] font-bold text-[#DF762A]">12</span>
            <span className="text-sm">리뷰</span>
          </p>
          <p className="flex flex-col items-center px-8.5">
            <span className="text-[2.125rem] font-bold text-[#DF762A]">6</span>
            <span className="text-sm">찜하기</span>
          </p>
        </article>
      </section>

      <section className="px-7.5 pt-9">
        <article className="flex justify-between text-mainGray text-sm pb-3.25 border-mainBlack border-b">
          <div>총 52개</div>
          <div>최근에 담은 순 (sort)</div>
        </article>

        <section>
          {[1, 2, 3].map((item) => (
            <ListItem key={item} />
          ))}
        </section>
      </section>
    </main>
  );
}
