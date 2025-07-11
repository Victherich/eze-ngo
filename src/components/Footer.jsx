import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../Images2/logo2.jpeg";
import { useNavigate } from "react-router-dom";

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const FooterWrapper = styled.footer`
  background: #119458;
  color: white;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // text-align: center;
`;

const Logo = styled.img`
  border-radius: 20px;
  width: 150px;
  height: 100px;
  // animation: ${rotateAnimation} 10s linear infinite;
  margin-bottom: 20px;
`;

const SectionsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 250px;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: white;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.6;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin: 8px 0;
  font-size: 15px;
  transition: 0.3s;

  &:hover {
    color: #f8b400;
    cursor: pointer;
  }
`;

const SocialIcons = styled.div`
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  margin: 0 10px;
  color: white;
  font-size: 30px;
  transition: 0.3s;

  &:hover {
    color: #f8b400;
  }
`;

const FooterNote = styled.p`
  text-align: center;
  font-size: 13px;
  margin-top: 10px;
  border-top: 1px solid #444;
  padding-top: 10px;
  width: 100%;
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      <Logo src={logo} alt="logo" />

      <SectionsGrid>
        <Section>
          <Title>The Foundation</Title>
         <Text>
  At IKUKU-OMA IDEMILI FOUNDATION, our mission is to strengthen and support communities through meaningful initiatives, sustainable development efforts, and transformative impact.
</Text>
        </Section>

        <Section>
          <Title>Quick Links</Title>
          <LinksList>
            <LinkItem onClick={() => {navigate("/"); window.scroll(0, 0);}}>🏠 Home</LinkItem>
            <LinkItem onClick={() => navigate("/aboutus")}>ℹ️ About Us</LinkItem>
            <LinkItem onClick={() => navigate("/gallery")}>📚 Gallery</LinkItem>
            <LinkItem onClick={() => navigate("/donate")}>💖 Donate</LinkItem>
            <LinkItem onClick={() => navigate("/blogs")}>📚 Blogs</LinkItem>
            <LinkItem onClick={() => navigate("/contactus")}>📞 Contact Us</LinkItem>
          </LinksList>
        </Section>

        <Section>
          <Title>Contact Us</Title>
  
          <Text>📍 No. 3, New Bussa, off Orlu Street, Area 3, Garki, FCT Abuja.</Text>
          <Text>📧 info@ikukuomaidemili.com</Text>
          <Text>📞 +234 803 349 4645</Text>
          <Text>📞 +234 705 266 6649</Text>

          <SocialIcons>
             <p>Follow us: </p>
          <SocialIcon href="https://www.facebook.com/p/Ikukuoma-Idemili-Foundation-100032546241080/" target="_blank" rel="noopener noreferrer">
  <FaFacebook />
</SocialIcon>
 
            {/* <SocialIcon href="#"><FaInstagram /></SocialIcon> */}
            {/* <SocialIcon href="#"><FaLinkedin /></SocialIcon> */}
            {/* <SocialIcon href="#"><FaEnvelope /></SocialIcon> */}
          </SocialIcons>
        </Section>
      </SectionsGrid>

      <FooterNote>
        © {new Date().getFullYear()} IKUKU-OMA IDEMILI FOUNDATION | All Rights Reserved.
      </FooterNote>
      {/* <FooterNote>Motto: Let’s do something positive</FooterNote> */}
    </FooterWrapper>
  );
};

export default Footer;
