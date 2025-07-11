import React from "react";
import styled from "styled-components";
import { FaHandHoldingHeart, FaUsers, FaHandshake, FaGlobe, FaLightbulb, FaClinicMedical, FaChild, FaHeartbeat, FaBalanceScale, FaFemale } from "react-icons/fa";
import Hero3 from "./Hero3";
import bg from '../Images/7676.jpg'
import OperationalModule from "./OperationalModule";
import InterventionStrategies from "./InterventionStrategies";
import { useNavigate } from "react-router-dom";


// Styled Components
const PageWrapper = styled.div`
  font-family: "Arial", sans-serif;
  background: #f9f9f9;
  padding-top:80px;
`;

const HeroSection = styled.div`
  background: url("https://source.unsplash.com/1600x900/?charity,helping-hands") center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 120px 20px;
`;

const HeroTitle = styled.h1`
  font-size: 42px;
  font-weight: bold;
  text-transform: uppercase;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const Section2 = styled.div`
  padding: 60px 20px;
  text-align: center;
  background-image:url(${bg});
//   background-color:red;
`;

const SectionContainer = styled.div`
  max-width: 900px;
  margin: auto;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  color: #119458;
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
`;

const IconWrapper = styled.div`
  font-size: 50px;
  color: #119458;
  margin-bottom: 15px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const GridItem = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const Button = styled.button`
  background: #119458;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  font-weight:bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;

  &:hover {
    background: gray;
  }
`;

// About Page Component
const AboutPage = () => {
    const navigate = useNavigate();
  return (
    <PageWrapper>
     

      <Hero3/>
      {/* <AboutPageChild/> */}

      {/* About Section */}
      <Section>
  <SectionContainer>
    <IconWrapper>
      <FaHandHoldingHeart />
    </IconWrapper>
    <SectionTitle>Who We Are</SectionTitle>
    <SectionText style={{ textAlign: "left" }}>
     At Ikuku Oma Idemili Foundation, we believe that every individual deserves the opportunity to thrive and reach their full potential. As a non-governmental organization, we are dedicated to enhancing the lives of the poor, orphans, vulnerable children, and disadvantaged persons in Nigeria.
    </SectionText>
  </SectionContainer>
</Section>


      {/* Mission & Vision */}
      <Section2>
        <GridContainer>
          <GridItem style={{backgroundColor:"rgba(255,255,255,0.8)"}} >
            <IconWrapper>
              <FaLightbulb />
            </IconWrapper>
            <SectionTitle>Our Mission</SectionTitle>
            <SectionText>
           "A society where every individual has access to quality education, healthcare, and economic opportunities, enabling them to live a life of dignity and purpose." </SectionText>
          </GridItem>

          <GridItem style={{backgroundColor:"rgba(255,255,255,0.8)"}}>
            <IconWrapper>
              <FaGlobe />
            </IconWrapper>
            <SectionTitle>Our Vision</SectionTitle>
            <SectionText>
           "To empower and uplift the lives of the most vulnerable members of our society through holistic support services, advocacy, and community development initiatives, promoting inclusivity, equality, and human dignity."  </SectionText>
          </GridItem>
        </GridContainer>
      </Section2>

      {/* Goals Section */}
  <Section style={{ background: "#f4f4f4" }}>
  <SectionTitle>Our Objectives</SectionTitle>
  <GridContainer>
    <GridItem>
      <IconWrapper>
        <FaHandHoldingHeart />
      </IconWrapper>
      <SectionText>
        Provide care, education, and welfare support to the poor, orphans, and vulnerable children
      </SectionText>
    </GridItem>

    <GridItem>
      <IconWrapper>
        <FaChild />
      </IconWrapper>
      <SectionText>
        Advocate for children's rights and promote girl child education
      </SectionText>
    </GridItem>

    <GridItem>
      <IconWrapper>
        <FaUsers />
      </IconWrapper>
      <SectionText>
        Support less privileged, vulnerable, and internally displaced persons
      </SectionText>
    </GridItem>

    <GridItem>
      <IconWrapper>
        <FaClinicMedical />
      </IconWrapper>
      <SectionText>
        Facilitate community infrastructural development through primary healthcare and other initiatives
      </SectionText>
    </GridItem>

    <GridItem>
      <IconWrapper>
        <FaHeartbeat />
      </IconWrapper>
      <SectionText>
        Promote access to quality healthcare, nutrition, and shelter
      </SectionText>
    </GridItem>

    <GridItem>
      <IconWrapper>
        <FaBalanceScale />
      </IconWrapper>
      <SectionText>
        Fight discrimination, reduce inequality, and promote inclusivity through education and skill acquisition
      </SectionText>
    </GridItem>

    <GridItem>
      <IconWrapper>
        <FaFemale />
      </IconWrapper>
      <SectionText>
        Empower widows and single mothers through skill acquisition and financial support programs
      </SectionText>
    </GridItem>
  </GridContainer>
</Section>


     
      <OperationalModule/>

      <InterventionStrategies/>

      {/* Call to Action */}
<Section style={{ background: "rgba(0,255,0,0.1)", color: "#222" }}>
  <SectionContainer>
    <SectionTitle style={{ color: "#119458" }}>Join Us</SectionTitle>
    <SectionText style={{ color: "#222", textAlign: "left" }}>
      Together, we can create a brighter future for all. Support our mission, partner with us, or volunteer your time and skills. Every contribution counts, and every effort makes a difference.
      <br /><br />
      At Ikuku Oma Idemili Foundation, we are committed to making a lasting impact in the lives of those we serve. Thank you for being part of our journey.
    </SectionText>
    <Button onClick={() => navigate('/donate')}>Get Involved</Button>
  </SectionContainer>
</Section>

    </PageWrapper>
  );
};

export default AboutPage;
