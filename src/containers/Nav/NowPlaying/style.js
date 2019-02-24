import styled, { css } from 'styled-components/macro';
import posed from 'react-pose';
import { NavItem } from '../styled';

const S = {};

const SongInfo = posed(NavItem)({
  close: {
    width: '0',
    opacity: 0,
    transition: { ease: [0.4, 0.0, 0.2, 1] },
  },
  open: {
    width: 'auto',
    opacity: 1,
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
  margin-left: -.25em;
  transform: translateZ(0);

  div {
    padding-left: .75em;
  }
`;

S.Emoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

S.MobileSongInfo = styled.div`
  ${props => !props.open && css`
    opacity: 0
  `}
  transition: 400ms opacity ease;
  position: absolute;
  width: 100%;
  position: absolute;
  left: -.5em;
  top: .25em;
  transform: translateX(100%);
`;

export default S;
