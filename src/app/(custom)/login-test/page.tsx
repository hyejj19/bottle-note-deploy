'use client';

import { useEffect } from 'react';
import SocialLoginBtn from '../login/_components/SocialLoginBtn';

export default function LoginTest() {
  useEffect(() => {
    const kakaoSDK = document.createElement('script');
    kakaoSDK.async = false;
    kakaoSDK.src = `https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js`;
    kakaoSDK.integrity = `sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4`;
    kakaoSDK.crossOrigin = `anonymous`;
    document.head.appendChild(kakaoSDK);

    const onLoadKakaoAPI = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID);
        console.log('after Init: ', window.Kakao.isInitialized());
      }
    };

    kakaoSDK.addEventListener('load', onLoadKakaoAPI);
  }, []);

  const redirectUri = `http://localhost:3000/oauth/kakao`;
  const scope = 'account_email gender';

  const kakaoLoginHandler = () => {
    window.Kakao.Auth.authorize({
      redirectUri,
      scope,
    });
    console.log('Kakao Logining');
  };

  return (
    <main className="w-full h-[100vh] flex flex-col justify-center items-center bg-bgGray p-5">
      <h1>카카오 SDK 테스트 페이지</h1>
      <SocialLoginBtn type="KAKAO" onClick={kakaoLoginHandler} />
    </main>
  );
}
