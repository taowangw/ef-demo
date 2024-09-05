import * as S from '../../Flex/styled';
import { StyledTouchableProps } from '../../../types';

import styled, { css } from 'styled-components';

const feedbackStyles = css`
  transition: 0.2s ease-out;
  transition-property: filter, transform;

  &:focus:not([disabled]),
  &:hover:not([disabled]) {
    filter: brightness(1.03);
    transform: translateY(-2px);
  }

  &:active:not([disabled]) {
    filter: brightness(0.97);
    transform: translateY(1px);
    transition: 0s;
  }
`;

const Touchable = styled(S.Flex)<StyledTouchableProps>`
  cursor: ${({ cursor = 'pointer' }) => cursor};
  ${({ noFeedback }) => !noFeedback && feedbackStyles}
`;

export default Touchable;
