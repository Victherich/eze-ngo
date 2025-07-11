import React from "react";
import styled from "styled-components";
import { FaHandsHelping, FaHandHoldingHeart, FaHandshake } from "react-icons/fa";

// Styled Components
const GetInvolvedSection = styled.section`
  background: linear-gradient(135deg, rgba(0, 0, 80, 0.1), #119458 );
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
  color: white; /* Gold for title */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
  color: white;
  font-weight:500;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
`;

const ActionCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 30px;
  width: 280px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.05);
    // background: white;
    color: #000050;
  }
`;

const Icon = styled.div`
  font-size: 50px;
  color: white;
  margin-bottom: 15px;
  transition: 0.3s;
  
  ${ActionCard}:hover & {
    // color: #000050;
  }
`;

const ActionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color:white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
`;

const ActionText = styled.p`
  font-size: 16px;
  color: #333;
  font-weight:500;
  transition: 0.3s;
`;

const ActionButton = styled.a`
  display: inline-block;
  background: white;
  color: #119458;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
  transition: 0.3s;

  &:hover {
    background: #119458;
    color: white;
  }
`;

// Get Involved Component
const GetInvolved = () => {
  return (
    <GetInvolvedSection id="get-involved">
      <Title>Get Involved 💖</Title>
      <Subtitle>
        Your support is the key to creating lasting change! Whether through donations, volunteering, or partnerships, together we can make an extraordinary impact.
      </Subtitle>

      <Container>
        {/* Donate */}
        <ActionCard>
          <Icon><FaHandHoldingHeart /></Icon>
          <ActionTitle>Make a Donation 💰</ActionTitle>
          <ActionText>
            Your generous contributions help fund life-changing projects and ensure a brighter future for many.
          </ActionText>
          <ActionButton href="/donate">Donate Now ➜</ActionButton>
        </ActionCard>

        {/* Volunteer */}
        <ActionCard>
          <Icon><FaHandsHelping /></Icon>
          <ActionTitle>Volunteer with Us 🙌</ActionTitle>
          <ActionText>
            Share your skills and time to support those in need. Together, we can achieve more.
          </ActionText>
          <ActionButton href="/contactus">Join Us ➜</ActionButton>
        </ActionCard>

        {/* Partner with Us */}
        <ActionCard>
          <Icon><FaHandshake /></Icon>
          <ActionTitle>Partner for Change 🤝</ActionTitle>
          <ActionText>
            Collaborate with us to expand our efforts and bring impactful change to more communities.
          </ActionText>
          <ActionButton href="/contactus">Partner Now ➜</ActionButton>
        </ActionCard>
      </Container>
    </GetInvolvedSection>
  );
};

export default GetInvolved;
