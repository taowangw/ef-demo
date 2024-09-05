import { FC } from 'react';

import { TableProps } from './types';
import { Flex } from './components/Flex';

export const FlexTable: FC<TableProps> = props => <Flex {...props} />;
