import { Input } from 'antd';
import { styled } from 'styled-components';

export const InputAnt = styled(Input)`
  height: 40px;
  border-radius: 14px;
  padding: 10px;
  border: unset;
  background-color: ${(props) => props.theme.colors.bgSurface};
  color: ${(props) => props.theme.colors.surfaceHight};

  &.ant-input-affix-wrapper > input.ant-input {
    background-color: transparent !important;
    font-family: ${(props) => props.theme.font.variable};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: ${(props) => props.theme.colors.surfaceHight};
    &::placeholder {
      color: ${(props) => props.theme.colors.emphasisDarkSurfaceMedium};
    }
  }
  &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: transparent;
    border-inline-end-width: 0;
  }
  &.ant-input-affix-wrapper:focus,
  &.ant-input-affix-wrapper-focused {
    box-shadow: unset;
    border-inline-end-width: unset;
  }
  &.ant-input-affix-wrapper .ant-input-prefix {
    margin-inline-end: 7px;
    color: ${(props) => props.theme.colors.surfaceHight};
  }
  &.ant-input-affix-wrapper .ant-input-clear-icon {
    color: ${(props) => props.theme.colors.white};
  }

  /* style input */
  &.ant-input {
    font-family: ${(props) => props.theme.font.variable};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: ${(props) => props.theme.colors.surfaceHight};
    &::placeholder {
      color: ${(props) => props.theme.colors.surfaceSmall};
    }
  }
  &.ant-input:focus,
  &.ant-input-focused {
    border-color: unset;
    box-shadow: none;
  }
  &.ant-input:hover {
    border-color: unset;
  }

  &.ant-input-disabled,
  &.ant-input[disabled] {
    background-color: ${(props) => props.theme.colors.bgSurface};
  }
`;
export const InputPassAnt = styled(Input.Password)`
  height: 40px;
  border-radius: 14px;
  padding: 10px;
  border: unset;
  background-color: ${(props) => props.theme.colors.surfaceDark};

  &.ant-input-affix-wrapper > input.ant-input {
    background-color: ${(props) => props.theme.colors.neutral20} !important;
    /* background-color: inherit; */
    font-family: ${(props) => props.theme.font.variable};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: ${(props) => props.theme.colors.surfaceHight};
    &::placeholder {
      color: ${(props) => props.theme.colors.surfaceSmall};
    }
  }
  &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: transparent;
    border-inline-end-width: 0;
  }
  &.ant-input-affix-wrapper:focus,
  &.ant-input-affix-wrapper-focused {
    box-shadow: unset;
    border-inline-end-width: unset;
  }
  &.ant-input-affix-wrapper .ant-input-suffix {
    margin-inline-start: 7px;
    color: ${(props) => props.theme.colors.surfaceHight};
  }
  &.ant-input-affix-wrapper .ant-input-prefix {
    margin-inline-end: 7px;
    color: ${(props) => props.theme.colors.surfaceHight};
  }
  &.ant-input-affix-wrapper .ant-input-clear-icon {
    color: ${(props) => props.theme.colors.white};
  }

  /* style input */
  &.ant-input {
    font-family: ${(props) => props.theme.font.variable};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: ${(props) => props.theme.colors.surfaceHight};
    &::placeholder {
      color: ${(props) => props.theme.colors.surfaceSmall};
    }
  }
  &.ant-input:focus,
  &.ant-input-focused {
    border-color: unset;
    box-shadow: none;
  }
  &.ant-input:hover {
    border-color: unset;
  }

  svg {
    cursor: pointer;
  }

  .ant-input-affix-wrapper {
    background-color: ${(props) => props.theme.colors.neutral20};
  }
`;
