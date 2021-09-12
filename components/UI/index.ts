import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-size: 1rem;

  border-radius: 0.3em;
  border: none;
  padding: 0.55em 1.15em;

  color: ${(props) => props.theme.colors.fcPrimary};
  background-color: ${(props) =>
    props.primary ? props.theme.colors.bgPrimary : props.theme.colors.bgMedium};

  box-shadow: 5px 3px 4px 0 rgba(0, 0, 0, 0.2);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);

  &:hover {
    filter: brightness(135%);
  }
`;
