import React from 'react';
import styled from 'styled-components/macro';
import RoundCorner from 'components/RoundCorner/RoundCorner';
import Frame from './_Frame';

const Website = ({
  imgUrl, alt, dotColor, frameColor, backgroundColor, videoUrl,
}) => {
  const Media = () => (
    videoUrl ? (
      <video autoPlay muted>
        <source src={videoUrl} />
      </video>
    ) : <img src={imgUrl} alt={alt} />);

  return (
    <WebsiteWrapper backgroundColor={backgroundColor} >
      <Window radius={0.5}>
        <StyledFrame dotColor={dotColor} frameColor={frameColor} />
        {(videoUrl || imgUrl) && <Media />}
      </Window>
    </WebsiteWrapper>
  );
};

const StyledFrame = styled(Frame)`
  display: block;
  width: 100%;
`;

const WebsiteWrapper = styled.div`
  padding: 7vh 10vw;
  background: ${({ backgroundColor }) => backgroundColor && backgroundColor}
`;

const Window = styled(RoundCorner)`
  img,
  video {
    width: 100%;
    display: block;
  }
`;

export default Website;
