import React from 'react';
import Website from './Website';

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
