import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { FaSchool, FaHeartbeat, FaHandsHelping, FaUsers } from "react-icons/fa";

// Styled Components
const ImpactSection = styled.section`
  background: linear-gradient(135deg, rgba(0,0,80,0.1), #119458);
  color: white;
  padding: 80px 20px;
  text-align: center;
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
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 2px;
  color:white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 25px;
  width: 250px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Icon = styled.div`
  font-size: 40px;
  color: #119458;
  margin-bottom: 10px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
`;

const Count = styled.h3`
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: bold;
  color:#333;
  // color: #ddd;
  // text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
`;

// Impact Component
const Impact = () => {
  return (
    <ImpactSection id="impact">
      <Title>Our Transformative Impact 🌍</Title>
      <Subtitle>
        Through our relentless commitment to community development, we have empowered individuals, improved lives, and made a lasting difference across regions.
      </Subtitle>
      
      <Container>
        {/* Schools Built */}
        <StatCard>
          <Icon><FaSchool /></Icon>
          <Count><CountUp start={0} end={60} duration={4} />+</Count>
          <Label>Educational Facilities Established 🏫</Label>
        </StatCard>

        {/* Healthcare Centers */}
        <StatCard>
          <Icon><FaHeartbeat /></Icon>
          <Count><CountUp start={0} end={40} duration={4} />+</Count>
          <Label>Healthcare Centers Supported ❤️</Label>
        </StatCard>

        {/* Volunteers */}
        <StatCard>
          <Icon><FaHandsHelping /></Icon>
          <Count><CountUp start={0} end={600} duration={4} />+</Count>
          <Label>Dedicated Volunteers Mobilized 💪</Label>
        </StatCard>

        {/* Lives Impacted */}
        <StatCard>
          <Icon><FaUsers /></Icon>
          <Count><CountUp start={0} end={15000} duration={4} />+</Count>
          <Label>Lives Uplifted & Transformed 🌟</Label>
        </StatCard>
      </Container>
    </ImpactSection>
  );
};

export default Impact;
