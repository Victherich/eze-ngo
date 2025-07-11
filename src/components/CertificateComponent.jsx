
import React from "react";
import styled from "styled-components";
import founderImage from "../Images2/r (2).jpeg"; // Replace with actual image path

const AwardSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
//   background: linear-gradient(135deg, #f9f9f9, #e1ecf7);
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
  }
`;

const ImageBox = styled.div`
  flex: 1;
  max-width: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

const ContentBox = styled.div`
  flex: 1;
  max-width: 600px;
  color: #2a2a2a;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #119458;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #119458;
`;

const CertificateComponent = () => {
  return (
    <AwardSection>
      <ImageBox>
        <StyledImage src={founderImage} alt="Hon. Amb. Dr. Charles Nwanegbo Obi" />
      </ImageBox>
      <ContentBox>
        <Title>HON CHARLES NWANEGBO OBI BAGS DOCTORATE DEGREE</Title>
        <Paragraph>
          The <Highlight>Institute of Global Conflict Management</Highlight> (an affiliate of US Inter Global University Somalia/USA)
          has awarded <Highlight>Hon. Amb. Dr. Charles Nwanegbo Obi</Highlight>, popularly known as <Highlight>Ikukuoma Idemili</Highlight>, an
          honorary doctorate degree.
        </Paragraph>
        <Paragraph>
          He has been officially admitted as a <Highlight>Doctoral Fellow</Highlight> and a <Highlight>Certified Global Diplomat</Highlight>.
        </Paragraph>
        <Paragraph>
          <Highlight>Congratulations</Highlight> Hon. Amb. Dr. Charles Nwanegbo Obi FIGPCM, CGPI (Ikukuoma Idemili).
        </Paragraph>
      </ContentBox>
    </AwardSection>
  );
};

export default CertificateComponent;
