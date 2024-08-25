import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
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

    return NextResponse.json({
      data: response,
    });
  } catch (e) {
    return NextResponse.json({
      data: (e as Error).message,
    });
  }
}
