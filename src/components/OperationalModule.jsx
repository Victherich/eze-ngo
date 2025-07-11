import React from "react";
import styled, { keyframes } from "styled-components";
// import { motion } from "framer-motion";
import { FaHeart, FaUniversalAccess, FaChalkboardTeacher, FaHandshake } from "react-icons/fa";
import op from "../Images/76520.jpg"


// Animation for the heading underline
const underlineAnimation = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

// Styled Components
const Section = styled.section`
//   background: #f4f4f4;
  padding: 80px 20px;
  text-align: center;
  background-image:url(${op});
  background-size:cover;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background: linear-gradient(45deg, #3498db, #e74c3c);
    animation: ${underlineAnimation} 1.5s ease-in-out;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const Card = styled.div`
  background:rgba(255,255,255,0.8);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 50px;
//   color: #3498db;
color:#119458;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #119458;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  text-align: left;
`;

// Main Component
const OperationalModule = () => {
  return (
 <Section>
  <Title>Our Values</Title>
  <GridContainer>
    {/* Compassion */}
    <Card whileHover={{ scale: 1.05 }}>
      <IconWrapper><FaHeart /></IconWrapper>
      <CardTitle>Compassion</CardTitle>
      <Description>
        We care for the well-being of every individual
      </Description>
    </Card>

    {/* Inclusivity */}
    <Card whileHover={{ scale: 1.05 }}>
      <IconWrapper><FaUniversalAccess /></IconWrapper>
      <CardTitle>Inclusivity</CardTitle>
      <Description>
        We promote equality and dignity for all
      </Description>
    </Card>

    {/* Empowerment */}
    <Card whileHover={{ scale: 1.05 }}>
      <IconWrapper><FaChalkboardTeacher /></IconWrapper>
      <CardTitle>Empowerment</CardTitle>
      <Description>
        We believe in equipping individuals with the skills and knowledge to thrive
      </Description>
    </Card>

    {/* Partnership */}
    <Card whileHover={{ scale: 1.05 }}>
      <IconWrapper><FaHandshake /></IconWrapper>
      <CardTitle>Partnership</CardTitle>
      <Description>
        We collaborate with government agencies, NGOs, and community leaders to achieve our mission
      </Description>
    </Card>
  </GridContainer>
</Section>

  );
};

export default OperationalModule;
