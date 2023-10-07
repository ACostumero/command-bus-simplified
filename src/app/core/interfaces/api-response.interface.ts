export interface IApiCollectionResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[]
}

export interface IApiResponse<T> {
  data: T
}
