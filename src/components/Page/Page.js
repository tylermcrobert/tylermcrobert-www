import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styled';

export default function Page({ children }) {
  return (
    <Styled.PageContainer>
      {children}
    </Styled.PageContainer>
  );
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
};
