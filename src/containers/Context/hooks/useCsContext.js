import { useState, useContext } from 'react';
import { AppContext } from 'containers/App/App';

export default function useCsContext() {
  const [hoverTags, setHoverTags] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(0);

  const { index } = useContext(AppContext);

  const handleHover = (hoveredTag, i) => {
    setHoverTags(hoveredTag);
    setHoverIndex(i);
  };

  return {
    tags: hoverTags,
    index: (index || hoverIndex) + 1,
    handleHover,
  };
}
