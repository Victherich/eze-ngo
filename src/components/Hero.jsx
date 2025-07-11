

// import React from 'react';
// import "../CSS2/Hero2.css";

// const Hero = () => {
//   return (
//     <div className='HeroWrap'>
//       <div className='Overlay'></div> {/* Background overlay */}
//       <div className='HeroContent'>
//         <h1>DIGITAL <br /> PREMIUM TECH</h1>
//         <h2>Your best tech space for productivity and innovation</h2>
//         {/* <a className='HeroButton' href="#explore">Explore More</a> */}
//       </div>
//       <span className='ImageCredit'>
//         <a href="https://www.freepik.com/free-photo/3d-abstract-space-background-with-wireframe-landscape_4943498.htm#query=space%20tech%20background&position=1&from_view=keyword&track=ais&uuid=945d60cb-c300-401d-8f5a-6f8bd0faa6d4">Image by kjpargeter</a> on Freepik
//       </span>
//     </div>
//   );
// }

// export default Hero;


import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';  
import p1 from '../Images2/p (1).jpeg'
import p2 from '../Images2/p (2).jpeg'
import p3 from '../Images2/p (3).jpeg'
import p4 from '../Images2/p (4).jpeg'
import p5 from '../Images2/p (5).jpeg'
import p6 from '../Images2/p (6).jpeg'
import p7 from '../Images2/p (7).jpeg'
import p8 from '../Images2/p (8).jpeg'
import p9 from '../Images2/p (9).jpeg'
import p10 from '../Images2/p (10).jpeg'
import p11 from '../Images2/p (11).jpeg'
import p12 from '../Images2/p (12).jpeg'
import p13 from '../Images2/p (13).jpeg'
import p14 from '../Images2/p (14).jpeg'
import p15 from '../Images2/p (15).jpeg'
import p16 from '../Images2/p (16).jpeg'
import p17 from '../Images2/p (17).jpeg'
import p18 from '../Images2/p (18).jpeg'
import p19 from '../Images2/p (19).jpeg'
import p20 from '../Images2/p (20).jpeg'
import p21 from '../Images2/p (21).jpeg'
import p22 from '../Images2/p (22).jpeg'
import p23 from '../Images2/p (23).jpeg'
import p24 from '../Images2/p (24).jpeg'
import p25 from '../Images2/p (25).jpeg'
import p26 from '../Images2/p (26).jpeg'
import p27 from '../Images2/p (27).jpeg'
import p28 from '../Images2/p (28).jpeg'
import p29 from '../Images2/p (29).jpeg'
import p30 from '../Images2/p (30).jpeg'



// import { useSelector } from 'react-redux';


// Styled Components
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: linear-gradient(90deg, #0f172a, #1e293b);
  overflow: hidden;
  color: #ffffff;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  // color: #fbbf24;
  // color:rgba(0,0,255,0.7);
  margin-bottom: 1rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  opacity: 0;
  transform: translateY(50px);
  animation: ${(props) => props.isVisible ? 'flyInFromBottom 3s ease-out forwards' : 'none'};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

   @media (max-width: 428px) {
    font-size: 2rem;
  }

  @keyframes flyInFromBottom {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroSubtitle = styled.p`
  font-size: 2rem;
  font-weight:bold;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(-50px);
  animation: ${(props) => props.isVisible ? 'flyInFromTop 1s ease-out forwards' : 'none'};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

   @media (max-width: 428px) {
    font-size: 1rem;
  }

  @keyframes flyInFromTop {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Slider = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 1s linear;
  
`;

const CarImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: top;
  flex-shrink: 0;
`;


// Hero Component
const Hero = () => {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);


  const carImages = [
  p1, p2, p3, p5,  p7, p8, p9, p10,
  p11, p13, p14, p16, p17, p18, p20,
 p22, p23, p24, p25, p26,  p29, p30
];




  

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const totalImages = carImages.length;
        const nextPosition = (prev + 1) % totalImages;
        return nextPosition;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carImages.length]);

  // Intersection Observer to detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) observer.unobserve(sliderRef.current);
    };
  }, []);

  return (
    <HeroContainer ref={sliderRef}>
      <HeroContent>
        <HeroTitle isVisible={isVisible}>IKUKU-OMA IDEMILI FOUNDATION</HeroTitle>
        <HeroSubtitle isVisible={isVisible}>
        "Empowering Communities, Transforming Lives."
        </HeroSubtitle>
      </HeroContent>
      <Slider
        style={{ transform: `translateX(-${position * 100}vw)` }}
      >
        {carImages.concat(carImages).map((car, index) => (
          <CarImage key={index} src={car} alt={`Car ${index + 1}`} />
        ))}
      </Slider>
    </HeroContainer>
  );
};

export default Hero;

