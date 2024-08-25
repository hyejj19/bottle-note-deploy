'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function OauthKakaoCallbackPage() {
  const searchParams = useSearchParams();
  const authCode = searchParams.get('code');

  const loginHandler = async (code: string | string[]) => {
    const res = await fetch(`/api/oauth/kakao?code=${code}`, {
      method: 'POST',
    });

    const result = await res.json();
    console.log('data returned from api: ', result);
  };

  useEffect(() => {
    if (authCode) {
      loginHandler(authCode);
    }
  }, [authCode]);

  return <div>page</div>;
}
