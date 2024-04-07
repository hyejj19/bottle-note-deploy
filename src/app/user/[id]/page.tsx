import React from 'react';

export default function User() {
  return (
    <main className="bg-red w-full h-full text-fontBlack">
      <section className="bg-bgGray p-[30px] pb-[46px]">
        <article className="flex justify-between pb-[24px]">
          <div>Bottle Note</div>
          <button>Menu btn</button>
        </article>

        <section className="flex space-x-[21px] py-[35px] border-b border-t border-sub">
          <div className="w-[96px] h-[96px] flex justify-center items-center border border-sub rounded-full">
            프로필 이미지
          </div>
          <article className="space-y-[10px]">
            <h1 className="text-[30px] font-bold">김보틀</h1>
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

            <div className="space-x-[4px] text-sm">
              <button className="bg-sub px-[10px] py-[4px] rounded-md font text-white">
                팔로잉
              </button>
              <button className="bg-white border border-sub px-[10px] py-[4px] rounded-md font text-fontBlack">
                프로필 수정
              </button>
              <button className="bg-white border border-sub px-[10px] py-[4px] rounded-md font text-fontBlack">
                공유
              </button>
            </div>
          </article>
        </section>

        <article className="flex justify-center pt-[11px] divide-x divide-sub divide-opacity-30 text-fontBurgundy">
          <p className="flex flex-col items-center px-[34px]">
            <span className="text-[34px] font-bold text-[#DF762A]">53</span>
            <span className="text-[13px]">별점</span>
          </p>
          <p className="flex flex-col items-center px-[34px]">
            <span className="text-[34px] font-bold text-[#DF762A]">12</span>
            <span>리뷰</span>
          </p>
          <p className="flex flex-col items-center px-[34px]">
            <span className="text-[34px] font-bold text-[#DF762A]">6</span>
            <span>찜하기</span>
          </p>
        </article>
      </section>
    </main>
  );
}
