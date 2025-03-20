export const ENDPOINT = {
  CITY: 'v1/cities',
  HOTEL_SEARCH: 'v1/hotels/search',
};

export const ENDPOINT_LOCAL_API = {
  CITY: 'city',
  HOTEL_SEARCH: (params: string) => `hotel_search?${params}`
}