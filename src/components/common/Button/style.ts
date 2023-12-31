import { Button } from 'antd';
import { styled } from 'styled-components';

interface PropsBtn {
  hoverbgcolor: string;
  bgcolor: string;
  color: string;
  fontSize: string;
  lineheight: string;
  padding: string;
  borderradius: string;
  maxwidth?: string;
  hoverColor?: string;
}
export const BtnAnt = styled(Button)<PropsBtn>`
  width: 100%;
  height: 100%;
  max-width: ${(props) => `${props.maxwidth}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  border: unset;
  border-color: transparent;
  text-align: center;
  isolation: isolate;
  border-radius: ${(props) => props.borderradius};
  padding: ${(props) => props.padding};
  color: ${(p) => p.color};
  font-family: ${(props) => props.theme.font.variable};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineheight};
  background-color: ${(props) => props.bgcolor};

  &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    opacity: 0.8;
    color: ${(p) => p.color};
    background-color: ${(props) => props.hoverbgcolor};
  }

  &.ant-btn-default:disabled {
    border-color: transparent;
    color: ${(p) => (p.hoverColor ? p.hoverColor : p.color)};
    background-color: ${(props) => props.hoverbgcolor};
    box-shadow: none;
    transition: opacity ease-out 0.2s;
    opacity: 0.4;
  }
`;
