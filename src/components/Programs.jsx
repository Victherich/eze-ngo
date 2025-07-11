import React from "react";
import styled from "styled-components";
import { FaBookOpen, FaHeartbeat, FaSeedling, FaUsers } from "react-icons/fa";
import p35 from '../Images2/p35.jpeg'


// Styled Components
const ProgramsSection = styled.section`
  background: url(${p35}) center/cover no-repeat;
  position: relative;
  padding: 100px 20px;
  text-align: center;
  overflow: hidden;
  color: white;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.8); /* Dark overlay */
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: white;
  letter-spacing: 2px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);
`;

const Subtitle = styled.p`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto 50px;
  line-height: 1.7;
  color: #f1f1f1;
  font-weight:500;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);
`;

const ProgramCard = styled.div`
  background: rgba(0, 0, 0, 0.25);
  // background:rgba(0,255,0,0.3);
  backdrop-filter: blur(10px);
  padding: 30px;
  width: 260px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s ease, background 0.3s ease;
  color: #333;
  border:1px solid white;

  &:hover {
    transform: translateY(-10px);
    // background: rgba(255, 255, 255, 0.4);
  }
`;

const Icon = styled.div`
  font-size: 50px;
  color: lightgray;
  margin-bottom: 15px;
`;

const ProgramTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: white;
`;

const ProgramText = styled.p`
  font-size: 16px;
  color: white;
`;

const ReadMoreButton = styled.a`
  display: inline-block;
  background: #0047ab;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 15px;
  transition: background 0.3s;

  &:hover {
    background: #003080;
  }
`;

// Programs Component
const Programs = () => {
  return (
    <ProgramsSection id="programs">
      <ContentWrapper>
        <Title>Programs That Change Lives 🌟</Title>
        <Subtitle>
          Our initiatives bring real change through education, health services, environmental efforts, and empowering communities.
        </Subtitle>

        <Container>
          {/* Education Program */}
          <ProgramCard>
            <Icon><FaBookOpen /></Icon>
            <ProgramTitle>Unlocking Education 📖</ProgramTitle>
            <ProgramText>
              Giving children the tools and opportunities to learn, grow, and thrive through inclusive education programs.
            </ProgramText>
            {/* <ReadMoreButton href="/education">Learn More ➜</ReadMoreButton> */}
          </ProgramCard>

          {/* Healthcare Program */}
          <ProgramCard>
            <Icon><FaHeartbeat /></Icon>
            <ProgramTitle>Health Access for All 🏥</ProgramTitle>
            <ProgramText>
              Delivering essential medical support, awareness, and wellness to underserved communities.
            </ProgramText>
            {/* <ReadMoreButton href="/healthcare">Discover ➜</ReadMoreButton> */}
          </ProgramCard>

          {/* Sustainability Program */}
          <ProgramCard>
            <Icon><FaSeedling /></Icon>
            <ProgramTitle>Green Planet Initiative 🌱</ProgramTitle>
            <ProgramText>
              Creating a sustainable future through environmental education, clean energy, and tree planting.
            </ProgramText>
            {/* <ReadMoreButton href="/sustainability">Explore ➜</ReadMoreButton> */}
          </ProgramCard>

          {/* Women Empowerment Program */}
          <ProgramCard>
            <Icon><FaUsers /></Icon>
            <ProgramTitle>Empower Her 🌼</ProgramTitle>
            <ProgramText>
              Training, mentoring, and investing in women to lead change and drive local economic growth.
            </ProgramText>
            {/* <ReadMoreButton href="/women-empowerment">Get Involved ➜</ReadMoreButton> */}
          </ProgramCard>
        </Container>
      </ContentWrapper>
    </ProgramsSection>
  );
};

export default Programs;
