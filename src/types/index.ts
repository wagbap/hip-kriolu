export interface Artist {
  id: string;
  name: string;
  role: string;
  img: string;
  location?: string;
  group?: string;
  categories: Category[];
}

export type Category =
  | 'rapper-underground'
  | 'rapper-comercial-afro-rap'
  | 'rapper-old-school'
  | 'new-school'
  | 'dj'
  | 'produtores'
  | 'poetas-slammers'
  | 'b-boys'
  | 'grafiti'
  | 'break-dancer';

export interface CategoryOption {
  value: Category | 'all';
  label: string;
}

export interface CounterConfig {
  key: string;
  label: string;
  min: number;
  max: number;
}