import styled from 'styled-components';

export const Bar = styled.div`
  background-color: ${(props) => props.theme.colors.bgBlack};
  display: flex;
  gap: 0.125em;
  padding: 0.25em 0.125em 0 0.125em;
  @media screen and (max-width: 768px) {
    padding: 0.25em 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

interface EditorTabProps {
  isActive: boolean;
}

export const EditorTab = styled.button<EditorTabProps>`
  font-size: 1rem;
  --border-radius: 0.35em;

  border: none;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);

  padding: 0.5em 3.5em;

  @media screen and (max-width: 768px) {
    padding: 0.5em 0;
  }

  color: ${(props) => props.theme.colors.fcPrimary};
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.bgMedium : props.theme.colors.bgDark};
  &:hover {
    filter: ${(props) => (props.isActive ? '' : 'brightness(135%)')};
  }
`;
