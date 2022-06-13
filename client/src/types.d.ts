type KeyOf<T> = keyof T;
type ValueOf<T> = T[KeyOf<T>];
type OneOf<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never;

type City = {
  name: string;
  date: number;
  count: number;
  distance: number;
};

type RequestParams = {
  field?: Exclude<keyof City, "date">;
  order?: string;
  search?: string;
  page?: number;
  limit?: number;
};

type ItemsResponse = {
  items: City[];
  totalCount: number;
  currentPage: number;
};

type ItemsError = Error | null;
type ItemsLoading = boolean;
