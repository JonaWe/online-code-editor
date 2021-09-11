import styled from 'styled-components';

const IFrame = styled.iframe`
  border: 0;
`;

interface IFrameDisplayProps {
  srcDocument: string;
}

const IFrameDisplay = ({ srcDocument }: IFrameDisplayProps) => {
  return (
    <IFrame
      srcDoc={srcDocument}
      sandbox="allow-scripts"
      width="100%"
      height="100%"
    />
  );
};

export default IFrameDisplay;
