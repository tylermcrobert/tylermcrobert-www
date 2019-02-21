import React from 'react';
import PropTypes from 'prop-types';
import { useSize } from 'react-use';
import styled from 'styled-components/macro';
import RoundCorner from 'components/RoundCorner/RoundCorner';
import Frame from './_Frame';

const Website = ({
  imgUrl, alt, dotColor, frameColor, backgroundColor, videoUrl,
}) => {
  const Media = () => (
    videoUrl ? (
      <video autoPlay muted playsInline loop>
        <source src={videoUrl} />
      </video>
    ) : <img src={imgUrl} alt={alt} />);

  const [browserWindow] = useSize(({ width }) => (
    <Window radius={0.6}>
      <StyledFrame dotColor={dotColor} width={width} frameColor={frameColor} />
      {(videoUrl || imgUrl) && <Media />}
    </Window>
  ));

  return (
    <WebsiteWrapper backgroundColor={backgroundColor} >
      {browserWindow}
    </WebsiteWrapper>
  );
};

Website.defaultProps = {
  videoUrl: undefined,
  dotColor: undefined,
  frameColor: undefined,
  backgroundColor: undefined,
  imgUrl: undefined,
};

Website.propTypes = {
  imgUrl: PropTypes.string,
  alt: PropTypes.string.isRequired,
  dotColor: PropTypes.string,
  frameColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  videoUrl: PropTypes.string,
};

const StyledFrame = styled(Frame)`
  display: block;
  width: ${props => props.width}px;
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
