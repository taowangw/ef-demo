import styled from 'styled-components';
import { StyledLayoutProps } from '../types';

const Layout = styled.div<StyledLayoutProps>`
  ${({ display }) => `display: ${display ?? 'flex'};`};
  ${({ background }) => background && `background: ${background};`};
  ${({ inlineSize }) => `width: ${inlineSize};`};
  ${({ blockSize }) => `height: ${blockSize};`};
  ${({ position }) => `position: ${position};`};
  ${({ left }) => `left: ${left};`};
  ${({ right }) => `right: ${right};`};
  ${({ top }) => `top: ${top};`};
  ${({ bottom }) => `bottom: ${bottom};`};
  ${({ margin }) => `margin: ${margin};`};
  ${({ padding }) => `padding: ${padding};`};
  ${({ alignItems }) => `align-items: ${alignItems};`};
  ${({ alignContent }) => `align-content: ${alignContent};`};
  ${({ justifyContent }) => `justify-content: ${justifyContent};`};
  ${({ overflowX }) => `overflow-x: ${overflowX};`};
  ${({ paddingBlockStart }) => `padding-top: ${paddingBlockStart};`};
  ${({ paddingBlockEnd }) => `padding-bottom: ${paddingBlockEnd};`};
`;

export default Layout;
