import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaHandsHelping, FaHandshake, FaUniversity, FaGlobe, FaUsers, FaBusinessTime, FaHeart,
  FaDonate, FaBullhorn, FaTools, FaPeopleCarry
 } from "react-icons/fa";

// Styled Components
const Section = styled.section`
  background: linear-gradient(135deg, #f9f9f9, #e3e3e3);
  padding:20px;
  padding-top:80px;

  text-align: center;
  clip-path: polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%);


  @media(max-width:768px){
    padding-top:50px;
    padding-bottom:50px;
  }
   
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #119458;
  margin-bottom: 20px;
  z-index:999;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
 
`;

const Card = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: relative;
  transition: transform 0.3s ease-in-out;
  z-index:999;

  &:hover {
    transform: translateY(-5px);
  }

  &:before {
    content: "";
    width: 100px;
    height: 100px;
    background: rgba(52, 152, 219, 0.2);
    position: absolute;
    top: -30px;
    left: -30px;
    border-radius: 50%;
  }
`;

const IconWrapper = styled.div`
  font-size: 20rem;
  // color: #3498db;
  color:#119458;
  margin-bottom: 15px;

  @media(max-width:768px){
    display:none;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const ListItem = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  &:before {
    content: "✔️";
    margin-right: 10px;
    color: #27ae60;
  }
`;

// Main Component
const InterventionStrategies = () => {
  return (
    <Section>
      <Title>OUR APPROACH</Title>
      {/* <Description>
        We focus on various strategies including advocacy, sponsorship, financing, and partnership to drive impactful community development.
      </Description> */}
 <Section>
  <CardContainer>
    <IconWrapper>
      <FaHandsHelping />
    </IconWrapper>
  
    <CardTitle style={{ textAlign: "left" }}>
      We engage in fundraising, donations, and partnerships to sustain our programs and welfare.
      Our team works tirelessly to provide support services, advocate for rights, and develop community infrastructure.
      We believe in the power of collective action and community-driven development.
    </CardTitle>
  </CardContainer>
</Section>


    </Section>
  );
};

export default InterventionStrategies;
