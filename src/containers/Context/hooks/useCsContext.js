import { useState, useContext, useEffect } from 'react';
import { AppContext } from 'containers/App/App';
import isMobile from 'is-mobile';

export default function useCsContext() {
  const [tags, setTags] = useState([]);
  const [index, setIndex] = useState(null);

  const { caseStudies } = useContext(AppContext);

  const handleHover = (hoveredTag, i) => {
    if (!isMobile()) {
      setTags(hoveredTag);
      setIndex(i);
    }
  };

  useEffect(() => {
    if (index !== null && index !== -1) {
      setTags(caseStudies[index].tags);
    }
  }, [index]);

  return {
    tags,
    index: index + 1,
    handleHover,
    setTags,
    setIndex,
  };
}
