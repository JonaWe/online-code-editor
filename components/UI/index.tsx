import styled, { useTheme } from 'styled-components';
import Loader from 'react-spinners/BeatLoader';

interface ButtonProps extends IButtonProps {
  loading?: boolean;
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

const IButton = styled.button<IButtonProps>`
  font-size: 1rem;

  border-radius: 0.3em;
  border: none;
  padding: 0.55em 1.15em;

  color: ${(props) => props.theme.colors.fcPrimary};
  background-color: ${(props) =>
    props.primary ? props.theme.colors.bgPrimary : props.theme.colors.bgMedium};

  box-shadow: 5px 3px 5px 0 rgba(0, 0, 0, 0.1);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);

  &:hover {
    filter: brightness(135%);
  }
`;

export const Button: React.FC<ButtonProps> = ({
  primary,
  children,
  loading,
  ...props
}) => {
  const theme = useTheme();
  return (
    <IButton primary={primary} {...props}>
      {!loading && children}
      {loading && <Loader size={10} color={theme.colors.fcPrimary} />}
    </IButton>
  );
};
