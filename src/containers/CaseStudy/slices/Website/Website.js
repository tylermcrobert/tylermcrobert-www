import React from 'react';
import PropTypes from 'prop-types';
import useSize from 'hooks/useSize';
import styled from 'styled-components/macro';

const Website = ({
  imgUrl, alt, dotColor, frameColor, backgroundColor, videoUrl,
}) => {
  const Media = () => (
    videoUrl ? (
      <video autoPlay muted playsInline loop>
        <source src={videoUrl} />
      </video>
    ) : <img src={imgUrl} alt={alt} />);

  const [ref, { width }] = useSize();

  return (
    <WebsiteWrapper backgroundColor={backgroundColor} >
      <StyledWindow radius={0.5} width={width} ref={ref}>
        <StyledFrame dotColor={dotColor} frameColor={frameColor}>
          <svg viewBox="0 0 52 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill={dotColor || '#FF6158'} cx="6" cy="6" r="6" />
              <circle fill={dotColor || '#FFBE2D'} cx="26" cy="6" r="6" />
              <circle fill={dotColor || '#27C93F'} cx="46" cy="6" r="6" />
            </g>
          </svg>
        </StyledFrame>
        {(videoUrl || imgUrl) && <Media />}
      </StyledWindow>
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

const StyledFrame = styled.div`
  width: 100%;
  background: ${props => (props.frameColor ? props.frameColor : '#4a4a4a')};
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 1%;
  display: block;
  width: 100%;
  font-size: 0;

  svg {
    width: 4%;
    fill: blue;
  }
`;

const WebsiteWrapper = styled.div`
  padding: 7vh 10vw;
  background: ${({ backgroundColor }) => backgroundColor && backgroundColor}
`;

const StyledWindow = styled.div`
  overflow: hidden;
  border-radius: ${props => props.width / 200}px;
  max-width: 1200px;
  margin: 0px auto;

  img,
  video {
    width: 100%;
    display: block;
  }


`;

export default Website;
