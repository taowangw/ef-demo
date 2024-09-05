import { FC } from 'react';

import * as S from './styled';
import { RowProps } from '../../types';

export const Row: FC<RowProps> = props => (
  <S.Row {...props} justifyContent="space-between" padding="8px" />
);
