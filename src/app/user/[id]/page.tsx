import React from 'react';

// NOTE: 공통 스타일 정할 것
// 1. 폰트컬러 전체 적용 ~ 컨벤션?
// 2. semantic 태그 사용하기
// 3. 컴포넌트화의 기준 - 공용이 아닌 페이지별 컴포넌트는 어떻게 관리할 것인가?
// 4. figma 작업 devmode 없이 어떻게 ??
// 5. px 단위 없애자 - 사이즈 theme에 추가 정의하자
// 6. sub 대신 sub_coral 로 피그마와 맞출까여?

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
