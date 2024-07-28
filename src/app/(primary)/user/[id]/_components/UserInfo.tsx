'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import ProfileDefaultImg from 'public/profile-default.svg';

interface Props {
  profileImgSrc: string | null;
  follower: number;
  following: number;
  currentId: string;
  isFollowing?: boolean;
}

// 이 아이의 역할
// 3. 내 프로필일 경우 프로필 수정 페이지로 이동
const UserInfo = ({
  profileImgSrc = null,
  follower,
  following,
  isFollowing,
  currentId,
}: Props) => {
  const { data: session } = useSession();
  const [isMatchUser, setIsMatchUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMatchUser(session?.user.userId === Number(currentId));
  }, [session]);

  return (
    <section className="flex space-x-5.25 py-8.75 border-b border-t border-subCoral">
      <Image
        src={profileImgSrc ?? ProfileDefaultImg}
        alt="프로필 이미지"
        width={104}
        height={104}
      />

      <article className="space-y-2.5">
        <h1 className="text-3xl font-bold text-subCoral">서울시보틀짱</h1>
        <div className="flex gap-2">
          <p className="text-sm">
            <strong>팔로워 </strong>
            <span>{follower}</span>
          </p>
          <p className="text-sm">
            <strong>팔로잉 </strong>
            <span>{following}</span>
          </p>
        </div>

        <div className="space-x-1 text-sm">
          {isMatchUser && (
            <button
              className="border border-subCoral px-2.5 py-1 rounded-md text-10 bg-white text-subCoral"
              onClick={() => router.push(`/user/${currentId}/edit`)}
            >
              프로필 수정
            </button>
          )}

          {!isMatchUser &&
            (isFollowing ? (
              <button
                className="px-2.5 py-1 text-10 label-selected"
                onClick={() =>
                  alert('팔로우를 끊고 isFollowing -> false 다옹...')
                }
              >
                팔로잉
              </button>
            ) : (
              <button
                className="px-2.5 py-1 text-10 label-default"
                onClick={() =>
                  alert('팔로잉을 하고 isFollowing -> true 다옹...')
                }
              >
                팔로우
              </button>
            ))}
        </div>
      </article>
    </section>
  );
};

export default UserInfo;
