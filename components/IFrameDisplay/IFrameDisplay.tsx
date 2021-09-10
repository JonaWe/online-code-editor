import styled from 'styled-components';

const IFrame = styled.iframe`
  border: 0;
`;

interface IFrameDisplayProps {
  htmlSrc: string;
  cssSrc: string;
  jsSrc: string;
}

const IFrameDisplay = ({ htmlSrc, cssSrc, jsSrc }: IFrameDisplayProps) => {
  const srcDocument = `
    <html>
      <style> ${cssSrc} </style>
      <body>${htmlSrc}</body>
      <script>${jsSrc}</script>
    </html>
  `;
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
