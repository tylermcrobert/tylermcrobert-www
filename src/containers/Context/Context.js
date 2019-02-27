import React, { useContext, createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useMedia } from 'react-use';
import { AppContext } from 'containers/App/App';
import useCsContext from './hooks/useCsContext';
import Tags from './partials/Tags';
import Index from './partials/Index';
import Styled, { PosedSideways } from './blocks';

const getUniqueTags = array =>
  Array.from(new Set(array
    .map(cs => cs.tags)
    .reduce((a, b) => a
      .concat(b), [])));

export const ContextFrameContext = createContext();

function ContextFrame({ children, enabled }) {
  const [hoveredTag, setHoveredTag] = useState(null);
  const { caseStudies } = useContext(AppContext);
  const {
    tags, index, handleHover, setTags, setIndex,
  } = useCsContext();
  const uniqueTags = getUniqueTags(caseStudies);
  const isMobile = useMedia('(max-width: 576px)');

  return (
    <ContextFrameContext.Provider value={{
     handleHover, hoveredTag, setTags, setIndex,
    }}
    >
      <Styled.Wrapper>
        {!isMobile &&
          <>
            <Styled.Left>
              <PosedSideways pose={enabled ? 'enabled' : 'disabled'}>
                <Tags
                  tags={uniqueTags}
                  activeTags={tags}
                  index={index}
                  handleHover={handleHover}
                  setHoveredTag={setHoveredTag}
                  hoveredTag={hoveredTag}
                />
              </PosedSideways>
            </Styled.Left>
            <Styled.Right>
              <PosedSideways pose={enabled ? 'enabled' : 'disabled'}>
                <Index index={index} length={caseStudies.length} />
              </PosedSideways>
            </Styled.Right>
        </>
        }
        {children}
      </Styled.Wrapper>
    </ContextFrameContext.Provider>
  );
}

export default ContextFrame;

ContextFrame.propTypes = {
  children: PropTypes.element.isRequired,
};
