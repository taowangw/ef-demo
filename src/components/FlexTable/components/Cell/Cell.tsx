import { FC } from 'react';

import * as S from './styled';
import { CellProps } from '../../types';
import { Touchable } from '../Touchable';

export const Cell: FC<CellProps> = ({ text, touchable, width }) => (
  <S.Cell flexBasis={width} flexGrow={1} flexShrink={0} padding='8px'>
    {touchable ? <Touchable>{text.toString()}</Touchable> : text.toString()}
  </S.Cell>
);
