import Popup from 'reactjs-popup';
import styled from 'styled-components';

export const PopupWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.bgDark};
  color: ${(props) => props.theme.colors.fcPrimary};
  padding: 1em 3em;
  border-radius: 1em;
`;

export const StyledPopup = styled(Popup)`
  &-overlay {
    background: black;
    opacity: 90%;
  }
`;
