import styled from 'styled-components';
import { StyledFlexProps } from '../../../types';

const Flex = styled.div<StyledFlexProps>`
  ${({ display }) => `display: ${display ?? 'flex'};`};
  ${({ background }) => background && `background: ${background};`};
  ${({ inlineSize }) => `width: ${inlineSize};`};
  ${({ blockSize }) => `height: ${blockSize};`};
  ${({ flexGrow }) => `flex-grow: ${flexGrow};`};
  ${({ flexShrink }) => `flex-shrink: ${flexShrink};`};
  ${({ flexBasis }) => `flex-basis: ${flexBasis};`};
  ${({ position }) => `position: ${position};`};
  ${({ left }) => `left: ${left};`};
  ${({ right }) => `right: ${right};`};
  ${({ top }) => `top: ${top};`};
  ${({ bottom }) => `bottom: ${bottom};`};
  ${({ margin }) => `margin: ${margin};`};
  ${({ padding }) => `padding: ${padding};`};
  ${({ flexDirection }) => `flex-direction: ${flexDirection ?? 'row'};`};
  ${({ flexWrap }) => `flex-wrap: ${flexWrap};`};
  ${({ alignItems }) => `align-items: ${alignItems};`};
  ${({ alignContent }) => `align-content: ${alignContent};`};
  ${({ justifyContent }) => `justify-content: ${justifyContent};`};
`;

export default Flex;
