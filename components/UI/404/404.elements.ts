import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  color: ${(props) => props.theme.colors.fcPrimary};
  background-color: ${(props) => props.theme.colors.bgDark};

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  h2 {
    margin: 0.125em 0 1.125em 0;
  }
`;
