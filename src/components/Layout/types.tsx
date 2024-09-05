export type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
export type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';

export type Alignment = 'baseline' | 'stretch';
export type InlinePosition = 'left' | 'right';
export type ContentPosition =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end';
export type SelfPosition = 'self-start' | 'self-end';
export type ContentDistribution =
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type AlignSelf = ContentPosition | SelfPosition | Alignment;
export type AlignContent = ContentPosition | Alignment | ContentDistribution;
export type JustifyContent = AlignContent | InlinePosition;
export type Cursor = 'auto' | 'pointer';
export type OverFlow = 'auto' | 'hidden' | 'overlay' | 'scroll' | 'visible';

export interface StyledLayoutProps {
  id?: string;
  alignItems?: AlignSelf;
  alignContent?: AlignContent;
  background?: string;
  boxShadow?: string;
  inlineSize?: string;
  blockSize?: string;
  display?: string;
  overflowX?: OverFlow;
  paddingBlockStart?: string;
  paddingBlockEnd?: string;
  position?: Position;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  padding?: string;
  margin?: string;
  justifyContent?: JustifyContent;
}

export interface LayoutProps extends StyledLayoutProps {}
