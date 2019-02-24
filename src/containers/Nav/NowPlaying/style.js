import styled from 'styled-components/macro';
import posed from 'react-pose';

const S = {};

const SongInfo = posed.div({
  open: {
    width: 'auto',
    opacity: 1,
    marginLeft: '1em',
    transition: { ease: [0.4, 0.0, 0.2, 1] },
  },

  close: {
    width: '0',
    opacity: 0,
    marginLeft: '0em',
    transition: { ease: [0.4, 0.0, 0.2, 1] },
  },
});

S.NowPlaying = styled.div`
  display: flex;
  cursor: pointer;
`;

S.SongInfo = styled(SongInfo)`
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transform: translateZ(0);
`;

S.Emoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default S;
