import { Container, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

interface ConstitutionStaticQueryProps {
  markdownRemark: {
    html: string;
  };
}

const ConstitutionStaticQuery = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "/about/constitution" } }) {
      html
    }
  }
`;

const ConstitutionWrapper = styled.div`
  margin: var(--section-margin);
  font-family: 'Nunito Sans';
`;

const ConstitutionContentWrapper = styled.div`
  pre {
    overflow: auto;
  }

  & > * {
    margin: 10px 0;
  }
`;

const Constitution = () => {
  const { markdownRemark } = useStaticQuery<ConstitutionStaticQueryProps>(ConstitutionStaticQuery);
  const { html: constitutionHTML } = markdownRemark;

  return (
    <ConstitutionWrapper>
      <Container>
        <ConstitutionContentWrapper dangerouslySetInnerHTML={{ __html: constitutionHTML }} />
      </Container>
    </ConstitutionWrapper>
  );
};

export default Constitution;
