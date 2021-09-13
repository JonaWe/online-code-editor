import Popup from 'reactjs-popup';
import styled from 'styled-components';

export const PopupWrapper = styled.div`
  display: grid;
  opacity: 100%;
  background-color: ${(props) => props.theme.colors.bgDark};
  color: ${(props) => props.theme.colors.fcPrimary};
  padding: 2em 3.5em;

  @media screen and (max-width: 766px) {
    padding: 2em 2em;
  }

  border-radius: 1em;
  h2 {
    margin: 0 0 1.75rem 0;
  }

  label {
    font-size: 1.05rem;
    font-weight: bold;
    display: grid;
    input {
      font-size: 1.05rem;
      padding: 0.35em 0.5em;
      margin-top: 0.3em;

      border-radius: 0.35em;
      border: 2px solid ${(props) => props.theme.colors.bgMedium};
      outline: none;

      &:focus,
      &:active {
        border: 0;
        border: 2px solid ${(props) => props.theme.colors.bgPrimary};
      }
    }
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 0.75em;
  justify-content: flex-end;
  margin-top: 1.5rem;
`;

export const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.9);
  }
`;

interface InfoMessageProps {
  type: 'ERROR' | 'SUCCESSFUL';
}

export const InfoMessage = styled.span<InfoMessageProps>`
  display: block;
  padding: 0.35em 0.75em;
  margin-top: 1em;
  background-color: ${(props) =>
    props.type === 'ERROR'
      ? props.theme.colors.bgError
      : props.theme.colors.bgSuccessful};

  border-radius: 0.35em;
  border: 1.5px solid
    ${(props) =>
      props.type === 'ERROR'
        ? props.theme.colors.bgErrorBorder
        : props.theme.colors.bgSuccessfulBorder};
  color: ${(props) => props.theme.colors.fcPrimary};
  color: ${(props) =>
    props.type === 'ERROR'
      ? props.theme.colors.bgErrorBorder
      : props.theme.colors.bgSuccessfulBorder};
`;
