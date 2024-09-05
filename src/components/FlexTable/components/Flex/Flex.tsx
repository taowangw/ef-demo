import { FC, PropsWithChildren } from 'react';

import * as S from './styled';
import { FlexProps } from '../../types';

export const Flex: FC<PropsWithChildren<FlexProps>> = props => (
  <S.Flex {...props} />
);
