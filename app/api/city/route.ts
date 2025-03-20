import { BASE_API } from '@/constants/config';
import { ENDPOINT } from '@/constants/endpoint';
import { NextResponse } from 'next/server';

const GET = async () => {
  const { CITY } = ENDPOINT;
  const response = await fetch(
      `${BASE_API}${CITY}`, {
        method: 'GET'
      }
    );

  const responseJson = await response.json();
  return NextResponse.json(responseJson);
};

export { GET };
