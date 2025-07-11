import React from "react";
import styled from "styled-components";
import { FaHandsHelping, FaGlobeAfrica, FaUsers } from "react-icons/fa";
import ab1 from '../Images2/ab1.jpeg'; // Your new foundation image

// Styled Components
const AboutSection = styled.section`
  background:rgba(0,255,0,0.1);
  padding: 80px 20px;
  // color: white;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const LeftContent = styled.div`
  flex: 1;
  min-width: 300px;
  text-align: left;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #119458;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  // color: #ddd;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ReadMoreButton = styled.a`
  display: inline-block;
  background:#119458;
  color: white;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: gray; /* Lighter gold on hover */
  }
`;

const RightContent = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
`;

const ImageCard = styled.div`
  width: 100%;
  height: 400px;
  background: url(${(props) => props.img}) no-repeat center center/cover;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const IconCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const IconCard = styled.div`
  flex: 1;
  min-width: 150px;
  text-align: center;
  padding: 20px;
`;

const Icon = styled.div`
  font-size: 40px;
  color:#119458;
  margin-bottom: 10px;
`;

const IconText = styled.p`
  font-size: 16px;
  font-weight: bold;

`;

// About Us Component
const AboutComponent = () => {
  return (
    <AboutSection id="about">
      <Container>
        {/* Left Content */}
        <LeftContent>
          <Title>About IKUKU-OMA IDEMILI FOUNDATION 🌟</Title>
          <Subtitle>
            Our foundation is dedicated to empowering communities by creating lasting change through education, healthcare, and sustainable development programs. 
            We strive to uplift individuals, families, and communities across various regions, focusing on providing opportunities for those in need.
          </Subtitle>
          <Subtitle>
            🌍 With a mission to foster global impact, we work across multiple countries, enhancing lives through vital programs that focus on education, health, and community growth.
          </Subtitle>
          <ReadMoreButton href="/aboutus">Read More ➜</ReadMoreButton>
        </LeftContent>

        {/* Right Content */}
        <RightContent>
          <ImageCard img={ab1} />
        </RightContent>
      </Container>

      {/* Icons Section */}
      <IconCardContainer>
        <IconCard>
          <Icon><FaHandsHelping /></Icon>
          <IconText>100+ Volunteers</IconText>
        </IconCard>
        <IconCard>
          <Icon><FaGlobeAfrica /></Icon>
          <IconText>6+ Countries</IconText>
        </IconCard>
        <IconCard>
          <Icon><FaUsers /></Icon>
          <IconText>10,000+ Lives Impacted</IconText>
        </IconCard>
      </IconCardContainer>
    </AboutSection>
  );
};

export default AboutComponent;
