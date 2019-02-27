import { useState, useContext, useEffect } from 'react';
import { AppContext } from 'containers/App/App';
import isMobile from 'is-mobile';

export default function useCsContext() {
  const [tags, setTags] = useState([]);
  const [index, setIndex] = useState(0);

  const { caseStudies } = useContext(AppContext);

  const handleHover = (hoveredTag, i) => {
    if (!isMobile()) {
      setTags(hoveredTag);
      setIndex(i);
    }
  };

  useEffect(() => {
    setTags(caseStudies[index].tags);
  }, []);

  return {
    tags,
    index: index + 1,
    handleHover,
    setTags,
    setIndex,
  };
}
