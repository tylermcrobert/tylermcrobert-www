import React, { useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { useMedia } from 'react-use';
import { AppContext } from 'containers/App/App';
import useCsContext from './hooks/useCsContext';
import Tags from './partials/Tags';
import Index from './partials/Index';
import Styled from './blocks';

const getUniqueTags = array =>
  Array.from(new Set(array
    .map(cs => cs.tags)
    .reduce((a, b) => a
      .concat(b), [])));

export const ContextFrameContext = createContext();

function ContextFrame({ children }) {
  const { caseStudies } = useContext(AppContext);
  const { tags, index, handleHover } = useCsContext();
  const uniqueTags = getUniqueTags(caseStudies);
  const isMobile = useMedia('(max-width: 576px)');

  console.log(tags);

  return (
    <ContextFrameContext.Provider value={handleHover}>
      <Styled.Wrapper>
        {!isMobile &&
          <>
            <Styled.Left>
              <Tags
                tags={uniqueTags}
                activeTags={tags}
                index={index}
              />
            </Styled.Left>
            <Styled.Right>
              <Index index={index} length={caseStudies.length} />
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
