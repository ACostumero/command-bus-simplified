export interface IMapper<T, U> {
  fromApi(itemApi: T): U;
  fromApiMultiple(itemsApi: T[]): U[];
  toApi?(item: U): T;
  toApiMultiple?(items: U[]): T[];
}
