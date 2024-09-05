import { FC, PropsWithChildren } from 'react';

import * as S from './styled';
import { LayoutProps } from './types';

export const Layout: FC<PropsWithChildren<LayoutProps>> = props => (
  <S.Layout {...props} />
);
