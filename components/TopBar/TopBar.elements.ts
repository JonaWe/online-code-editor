import styled from 'styled-components';

export const Bar = styled.div`
  background-color: ${(props) => props.theme.colors.bgBlack};
  display: flex;
  gap: 0.125em;
  padding: 0.5em 0.5em 0 0.5em;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  color: ${(props) => props.theme.colors.fcPrimary};
  margin: 0;
`;
