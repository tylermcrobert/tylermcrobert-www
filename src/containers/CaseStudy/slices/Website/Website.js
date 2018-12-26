import React from 'react';
import RoundCorner from 'components/RoundCorner/RoundCorner';
import style from './Website.module.css';

const Frame = ({ dotColor, frameColor }) => (
  <svg
    className={style.browserFrame}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 850 22"
  >
    <path fill={frameColor || '#4a4a4a'} d="M0 0h850v22H0V0z" />
    <circle cx="11" cy="11" r="3" fill={dotColor || '#ff5f58'} />
    <circle cx="22" cy="11" r="3" fill={dotColor || '#ffc130'} />
    <circle cx="33" cy="11" r="3" fill={dotColor || '#29ca41'} />
  </svg>
);

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
    <div className={style.websiteWrapper} style={{ backgroundColor }} >
      <RoundCorner radius={0.4} className={style.website} >
        <Frame dotColor={dotColor} frameColor={frameColor} />
        {(videoUrl || imgUrl) && <Media />}
      </RoundCorner>
    </div>
  );
};

Website.Wrapper = ({ data, alt }) => {
  const {
    browser_frame_color: frameColor,
    background_color: backgroundColor,
    browser_image: image,
    browser_media: video,
  } = data.primary;

  return (
    <Website
      alt={alt}
      imgUrl={image.url}
      backgroundColor={backgroundColor}
      frameColor={frameColor}
      videoUrl={video.url}
    />
  );
};

export default Website;
