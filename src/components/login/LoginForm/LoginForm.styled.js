import styled from "styled-components";

import { BsFillPersonFill, BsPersonFillAdd, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdClose } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { Form, Field, ErrorMessage } from "formik";

export const Error = styled(ErrorMessage)`
  color: red;
`;
export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const NameIcon = styled(BsFillPersonFill)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -50%);
  transition: fill 250ms linear;
`;

export const SurnameIcon = styled(BsPersonFillAdd)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -50%);
  transition: fill 250ms linear;
`;

export const PhoneIcon = styled(BsFillTelephoneFill)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -50%);
  transition: fill 250ms linear;
`;

export const MailIcon = styled(MdEmail)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -50%);
  transition: fill 250ms linear;
`;

export const PasswordIcon = styled(RiLockPasswordFill)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -50%);
  transition: fill 250ms linear;
`;

export const Icon = styled(BsFillPersonFill)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -50%);
  transition: fill 250ms linear;
`;

export const Modal = styled.div`
  position: absolute;
  overflow: auto;
  padding: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: ${(p) => p.theme.colors.primaryWhiteColor};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${(p) => p.theme.radii.normal};
  overflow: unset;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTell}) {
    width: 350px;
    height: 609px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tell}) {
    width: 450px;
    height: 609px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    width: 528px;
    height: 609px;
  }

  @media screen and (max-height: 608px) {
    height: 100vh;
    overflow: auto;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.colors.primaryWhiteColor};
  border-radius: ${(p) => p.theme.radii.round};
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CloseIcon = styled(MdClose)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    fill: ${(p) => p.theme.colors.primaryAccentColor};
  }
`;

export const Title = styled.h2`
  margin-bottom: 12px;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: calc(23 / 20);
  text-align: center;
  letter-spacing: 0.03em;
`;

export const ForM = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
`;

export const InputLabel = styled.label`
  margin-bottom: 4px;
  font-size: ${(p) => p.theme.fontSizes.xxxs};
  font-weight: ${(p) => p.theme.fontWeight.regular};
  line-height: calc(14 / 12);
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.boldTextColor};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  padding-left: 42px;
  padding-bottom: 12px;
  padding-top: 12px;
  height: 40px;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(33, 33, 33, 0.2);
  transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${(p) => p.theme.radii.normal};

  :focus {
    outline: 1px solid ${(p) => p.theme.colors.primaryAccentColor};
  }
`;

export const RestoreField = styled.div`
  align-items: center;
  margin-bottom: 30px;
  font-size: ${(p) => p.theme.fontSizes.xxxs};
  line-height: calc(24 / 14);
  letter-spacing: 0.03em;
  color: ${(p) => p.theme.colors.labelColor};

  @media screen and (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    font-size: ${(p) => p.theme.fontSizes.xxxxs};
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    font-size: ${(p) => p.theme.fontSizes.xxs};
  }
`;

export const RestoreNavigate = styled.p`
  cursor: pointer;
  color: ${(p) => p.theme.colors.secondTextColor};
  font-weight: ${(p) => p.theme.fontWeight.bolt};
`;

export const Button = styled.a`
  width: 135px;
  height: 34px;
  margin-left: 5px;
  text-decoration: none;
  box-shadow: inset 0 0 0 1px ${(p) => p.theme.colors.secondTextColor};
  color: ${(p) => p.theme.colors.fourthTextColor};
  border-radius: ${(p) => p.theme.radii.quarter};
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: ${(p) => p.theme.fontWeight.regular};
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.secondTextColor};
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: ${(p) => p.theme.colors.secondTextColor};
    text-decoration: none;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding: 3px 5px;
  }
`;
