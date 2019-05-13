import React from 'react';
import styled from 'styled-components';

import Footer from './footer';

const PageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  a {
    box-decoration-break: clone;
    color: ${props => props.theme.white};
    background: ${props => props.theme.black};
    padding: 4px 8px;
    line-height: 1.8em;
  }
`

const InnerPage = styled.div`
  position: relative;
`

const ContentContainer = styled.div`
  min-height: 60vh;
`

const Page = ({ children }) => (
  <PageContainer>
    <InnerPage>
      <ContentContainer>
        {children}
      </ContentContainer>
      <Footer />
    </InnerPage>
  </PageContainer>
)

export default Page;
