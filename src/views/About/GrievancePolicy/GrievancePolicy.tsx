import { Container } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface PolicyStaticQueryProps {
  markdownRemark: {
    html: string;
  };
}

const PolicyStaticQuery = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "/about/grievance-policy" } }) {
      html
    }
  }
`;

const GrievancePolicyWrapper = styled.div`
  margin: var(--section-margin);
`;

const GrievancePolicyContentWrapper = styled.div`
  font-family: 'Nunito Sans';

  & > * {
    margin: 20px 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.6rem;
  }

  li {
    margin-left: 25px;
  }
`;

const GrievancePolicy = () => {
  const { markdownRemark } = useStaticQuery<PolicyStaticQueryProps>(PolicyStaticQuery);
  const { html: grievancePolicyHTML } = markdownRemark;

  return (
    <GrievancePolicyWrapper>
      <Container>
        <GrievancePolicyContentWrapper dangerouslySetInnerHTML={{ __html: grievancePolicyHTML }} />
      </Container>
    </GrievancePolicyWrapper>
  );
};

export default GrievancePolicy;
