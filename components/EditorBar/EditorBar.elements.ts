import styled from 'styled-components';

export const Bar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

interface EditorTabProps {
  isActive: boolean;
}

export const EditorTab = styled.button<EditorTabProps>`
  border: 0;
  background-color: ${(props) => (props.isActive ? 'green' : 'red')};
`;
