import { ReactNode } from 'react';
import { FREEZE_DIRECTION, SORT_DIRECTION } from './constants';

type ValueOf<T> = T[keyof T];
export type FreezeDirectionType = ValueOf<typeof FREEZE_DIRECTION>;

export type SortDirectionType = ValueOf<typeof SORT_DIRECTION>;

// export interface TableProps {
//     freezeDirection?: FreezeDirectionType;
//     freezeColumnsCount?: number;
//     pageSize?: number;
//     stickHeader?: boolean;
// }

type fixedDirection = 'left' | 'right';

export interface ColumnProps {
  field: string;
  label: string;
  fixed?: fixedDirection;
}

export interface RowProps {
  [key: string]: any;
}

export interface TableProps {
  columnFields: ColumnProps[];
  rowData: RowProps[];
  pageSize: number;
}

export type SortConfig = {
  key: string;
  direction: SortDirectionType;
};
