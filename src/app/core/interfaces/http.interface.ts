export interface IRouteInterface {
  segment: string;
  params?: IBaseRouteParams;
  headers?: IRouteHeader[];
  observe?: 'body' | 'events' | 'response';
  responseType?: string;
  body?: Object;
}

export interface IRouteHeader {
    [name: string]: string;
}

export interface IBaseRouteParams {
  id?: string;
  page?: number;
  size?: number;
  limit?: number;
  itemsPerPage?: number;
}
