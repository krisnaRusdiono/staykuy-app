import { BASE_API } from '@/constants/config';
import { ENDPOINT } from '@/constants/endpoint';
import countDayDiff from '@/helpers/countDayDiff';
import formatDateApi from '@/helpers/formatDateApi';
import createQueryParams from '@/utils/createQueryParams';
import { NextRequest, NextResponse } from 'next/server';

const GET = async (req: NextRequest) => {
  const { HOTEL_SEARCH } = ENDPOINT;
  const { searchParams } = new URL(req.url);
  const params = Object.fromEntries(searchParams.entries());
  const { city, startDate, endDate, guest, room, stars } = params || {};

  const objParams = {
    hotel_id: undefined,
    city_id: city,
    date: formatDateApi(startDate),
    nights: countDayDiff(startDate, endDate),
    rooms_count: room,
    min_price: undefined,
    max_price: undefined,
    adult_guests: guest,
    child_guests: undefined,
    stars: stars ? [stars] : undefined,
    facilities: undefined,
    is_breakfast_included: undefined,
    sort_by_price: undefined,
    page: 1,
    page_size: 10,
  };

  console.log(stars);

  const response = await fetch(`${BASE_API}${HOTEL_SEARCH}?${createQueryParams(objParams)}`, {
    method: 'GET',
  });

  const responseJson = await response.json();
  return NextResponse.json(responseJson);
};

export { GET };
