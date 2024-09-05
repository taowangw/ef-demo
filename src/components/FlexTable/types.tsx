import {
  PropsWithChildren,
  ReactNode,
  MouseEvent,
  UIEventHandler,
} from 'react';
import { Cursor, StyledLayoutProps } from '../Layout/types';

export type RowDirection = 'row' | 'row-reverse';
export type ColumnDirection = 'column' | 'column-reverse';
export type FlexDirection = RowDirection | ColumnDirection;
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type StyledFlexProps = StyledLayoutProps & {
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
};

export interface StyledTouchableProps {
  cursor?: Cursor;
  noFeedback?: true;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  onScroll?: UIEventHandler<HTMLDivElement>;
  padding?: string;
}

export type FlexProps = PropsWithChildren<StyledFlexProps>;

export interface RowProps extends FlexProps {
  background?: string;
  highlighted?: boolean;
  children: ReactNode;
}

export type ContentSize =
  | 'content'
  | 'fill'
  | 'min-content'
  | 'max-content'
  | 'fit-content';

export interface CellProps extends FlexProps {
  text: string | number;
  width?: ContentSize | string;
  touchable?: boolean;
}

export interface TableProps extends FlexProps {}
