import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { encode } from 'next-auth/jwt';
import { AuthApi } from '../../AuthApi';

const jwt = require('jsonwebtoken');

export async function POST(req: NextRequest) {
  const sessionCookie = process.env.NEXTAUTH_URL?.startsWith('https://')
    ? '__Secure-next-auth.session-token'
    : 'next-auth.session-token';
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const REDIRECT_URL = `${process.env.CLIENT_URL}/oauth/kakao`;

  try {
    const res = await fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URL}&code=${code}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      },
    );

    if (!res.ok) throw new Error(`Kakao login falied : ${res.status}`);

    const response = await res.json();

    const kakaoRes = await fetch('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${response.access_token}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    const userData = await kakaoRes.json();
    const loginPayload = {
      email: userData.kakao_account.email,
      gender: null,
      age: null,
      socialType: 'KAKAO',
    };

    const tokens = await AuthApi.login(loginPayload);
    const userInfo = jwt.decode(tokens.accessToken);

    const newSessionToken = await encode({
      secret: process.env.NEXTAUTH_SECRET as string,
      token: {
        tokens,
        ...userInfo,
      },
    });

    cookies().set({
      name: sessionCookie,
      value: newSessionToken,
    });

    return NextResponse.json({
      data: userData,
    });
  } catch (e) {
    return NextResponse.json({
      data: (e as Error).message,
    });
  }
}
