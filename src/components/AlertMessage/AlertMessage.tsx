import { PropsWithChildren } from 'react';
import { AlertMessageStyled } from './AlertMessage.style';

interface AlertMessageProps {
  type: 'SUCCESS' | 'ERROR';
}

export const AlertMessage: React.FC<PropsWithChildren<AlertMessageProps>> = ({
  type,
  children
}) => {
  return <AlertMessageStyled type={type}>{children}</AlertMessageStyled>;
};
