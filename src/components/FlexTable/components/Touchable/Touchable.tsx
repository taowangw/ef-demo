import { FC, PropsWithChildren } from 'react';

import * as S from './styled';
import { StyledTouchableProps } from '../../types';

export const Touchable: FC<PropsWithChildren<StyledTouchableProps>> = props => (
  <S.Touchable {...props} flexGrow={1} flexShrink={0}/>
);
