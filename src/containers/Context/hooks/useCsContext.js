import { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from 'containers/App/App';
import isMobile from 'is-mobile';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}


export default function useCsContext() {
  const [hoverTags, setHoverTags] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(0);

  const { index, view, caseStudies } = useContext(AppContext);
  const previousView = usePrevious(view);
  const caseStudyTags = index && caseStudies[index].tags;

  const handleHover = (hoveredTag, i) => {
    if (!isMobile()) {
      setHoverTags(hoveredTag);
      setHoverIndex(i);
    }
  };

  useEffect(() => {
    if (previousView !== 'home') {
      setHoverIndex(0);
      setHoverTags([]);
    }
  }, [view]);


  return {
    tags: caseStudyTags || hoverTags,
    index: (index || hoverIndex) + 1,
    handleHover,
  };
}
