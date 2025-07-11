import React, { useState } from 'react';
import styled from 'styled-components';
import p27 from '../Images2/p (27).jpeg'
import p28 from '../Images2/p (28).jpeg'
import p29 from '../Images2/p (29).jpeg'
import p30 from '../Images2/p (30).jpeg'
import p60 from '../Images2/p60.jpeg'

// Styled Components
const HeroSection = styled.div`
  background-image: url(${p60});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display:flex;
  justify-content:center;
  align-items:center; 
  flex-direction:column;
   // padding: 80px 20px 40px;
  text-align: center;
  min-height: 600px; /* Optional, ensures the section is tall enough to show the image */
`;


const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
`;

const BlogsWrap = styled.div`
  padding: 60px 20px;
  background: #f4f4f8;
  text-align: center;
`;

const BlogTitle = styled.h2`
  font-size: 2.2rem;
  color: #119458;
  margin-bottom: 10px;
`;

const BlogIntro = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 40px;
  max-width: 700px;
  margin: 0 auto;
`;

const BlogPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
`;

const BlogPost = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const PostInfo = styled.div`
  padding: 15px 0;
`;

const PostTitle = styled.h3`
  font-size: 1.4rem;
  color:#119458;
`;

const PostMeta = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: #333;
`;

const ReadMoreButton = styled.button`
  background:#119458;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.95rem;
  margin-top: 10px;

  &:hover {
    background: gray;
  }
`;

const Blogs = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const toggleExpand = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const blogPosts = [
    {
      id: 1,
      title: 'Reviving Local Culture Through Youth Engagement',
      author: 'IKUKU-OMA IDEMILI FOUNDATION',
      date: 'April 12, 2025',
      imageUrl: p27,
      content: 'We believe the youth are carriers of heritage. Our recent project involved organizing local art competitions and Igbo language workshops in secondary schools. These initiatives foster pride, cultural identity, and community leadership among young people in Idemili.',
    },
    {
      id: 2,
      title: 'Free Water Projects: A Gift of Life',
      author: 'IKUKU-OMA IDEMILI FOUNDATION',
      date: 'April 8, 2025',
      imageUrl: p28,
      content: 'Access to clean water remains a challenge in many rural areas. IKUKU-OMA IDEMILI FOUNDATION launched a borehole project across three villages, providing over 10,000 residents with safe, drinkable water. These community-led solutions are saving lives and empowering local governance.',
    },
    {
      id: 3,
      title: 'From Skill to Income: Training Women Entrepreneurs',
      author: 'IKUKU-OMA IDEMILI FOUNDATION',
      date: 'March 25, 2025',
      imageUrl: p29,
      content: 'Through our Women’s Enterprise Program, over 150 women have received free training in tailoring, soap-making, and digital marketing. Many are now running their own businesses, lifting their families out of poverty and becoming role models in their communities.',
    },
    {
      id: 4,
      title: 'Primary Education Boost: School Supplies for All',
      author: 'IKUKU-OMA IDEMILI FOUNDATION',
      date: 'March 15, 2025',
      imageUrl: p30,
      content: 'Education is the foundation of progress. In 2025, we distributed free school bags, textbooks, and uniforms to over 2,000 pupils across Anambra. Our aim is to reduce school dropouts and reignite children’s hope for a better future.',
    },
  ];

  return (
    <>
      <HeroSection>
        <HeroTitle>Welcome to Our Blog</HeroTitle>
        <HeroSubtitle>
          Discover how IKUKU-OMA IDEMILI FOUNDATION is transforming communities across Idemili and beyond — one story at a time.
        </HeroSubtitle>
      </HeroSection>

      <BlogsWrap>
        <BlogTitle>Latest Updates & Impact Stories</BlogTitle>
        <BlogIntro>Stay informed with the projects and people shaping the future of our communities.</BlogIntro>
        <BlogPostsGrid>
          {blogPosts.map(post => (
            <BlogPost key={post.id}>
              <BlogImage src={post.imageUrl} alt={post.title} />
              <PostInfo>
                <PostTitle>{post.title}</PostTitle>
                <PostMeta><strong>Author:</strong> {post.author}</PostMeta>
                <PostMeta><strong>Date:</strong> {post.date}</PostMeta>
                <PostContent>
                  {expandedPost === post.id ? post.content : `${post.content.slice(0, 150)}...`}
                </PostContent>
                <ReadMoreButton onClick={() => toggleExpand(post.id)}>
                  {expandedPost === post.id ? 'Read Less' : 'Read More'}
                </ReadMoreButton>
              </PostInfo>
            </BlogPost>
          ))}
        </BlogPostsGrid>
      </BlogsWrap>
    </>
  );
};

export default Blogs;
