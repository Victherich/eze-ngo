import React from "react";
import styled from "styled-components";
import e1 from '../Images2/p (42).jpeg'
import e2 from '../Images2/p (43).jpeg'
import e3 from '../Images2/p (44).jpeg'

// Styled Components
const NewsSection = styled.section`
  background: #fff;
  padding: 80px 20px;
  text-align: center;
  border-bottom:4px solid #000050;
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
  color: #119458;
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
  color: #555;
`;

const NewsCard = styled.div`
  background: #f9f9f9;
  padding: 20px;
  width: 300px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  color:#555;

  &:hover {
    transform: translateY(-5px);
    background: #119458;
    color: white;
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 15px;
`;

const NewsTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  // color:#000050;
`;

const NewsText = styled.p`
  font-size: 16px;
  color: #666;
  transition: 0.3s;
  
  ${NewsCard}:hover & {
    color: white;
  }
`;

const ReadMoreButton = styled.a`
  display: inline-block;
  background: #e67e22;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
  transition: 0.3s;

  &:hover {
    background: #d35400;
  }
`;

// News Component
const News = () => {
 const newsItems = [
  {
    id: 1,
    image: e1,
    title: "Smiles All Around at Our Community Wellness Drive 😊",
    description: "Hundreds received free check-ups, nutritional guidance, and emotional support during our latest health drive.",
    link: "/news1",
  },
  {
    id: 2,
    image: e2,
    title: "Volunteer Bootcamp: Train to Transform Lives 💪",
    description: "We’re hosting a hands-on session to empower new volunteers—learn how to lead, uplift, and create change.",
    link: "/news2",
  },
  {
    id: 3,
    image: e3,
    title: "Launching Mobile Clinics for Remote Villages 🚑",
    description: "Our upcoming program will bring vital healthcare access to families far from hospitals and health posts.",
    link: "/news3",
  },
];


  return (
    <NewsSection id="news">
      <Title>Latest News & Updates 📰</Title>
      <Subtitle>
        Stay updated with our latest projects, success stories, and upcoming events.
      </Subtitle>

      <Container>
        {newsItems.map((news) => (
          <NewsCard key={news.id}>
            <NewsImage src={news.image} alt={news.title} />
            <NewsTitle>{news.title}</NewsTitle>
            <NewsText>{news.description}</NewsText>
            {/* <ReadMoreButton href={news.link}>Read More ➜</ReadMoreButton> */}
          </NewsCard>
        ))}
      </Container>
    </NewsSection>
  );
};

export default News;
