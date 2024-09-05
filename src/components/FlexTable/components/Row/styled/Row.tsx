import styled from 'styled-components';

import { Flex } from '../../Flex';
import { RowProps } from '../../../types';

const Row = styled(Flex)<RowProps>`
  background-clip: border-box;
  background-color: ${({ highlighted, background }) =>
    highlighted ? '#e6fcf0' : background};

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export default Row;
