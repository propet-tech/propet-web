export interface Page<T> {
  content: Array<T>;
  totalElements: number;
  totalPages: number;
  number: number;
}
