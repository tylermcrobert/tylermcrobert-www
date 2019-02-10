import { useState, useEffect } from 'react';
import Prismic from 'prismic-javascript';
import { apiEndpoint } from 'config';

import getCaseStudies from '../util/getCaseStudies';

export default function usePrismicData() {
  const [caseStudies, setCaseStudies] = useState(null);
  const [api, setApi] = useState(null);

  useEffect(() => {
    Prismic.api(apiEndpoint).then(((response) => {
      setApi(response);
    }));
  }, []);

  getCaseStudies({ api, setCaseStudies });

  return {
    caseStudies,
    api,
  };
}
