

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';  
// import car1 from '../Images/ab1.jpeg';
// import car2 from '../Images/ab2.jpeg';
import car3 from '../Images2/p (20).jpeg';
import car4 from '../Images2/p (21).jpeg';
import car5 from '../Images2/p (22).jpeg';
import car6 from '../Images2/p (23).jpeg';
import car7 from '../Images2/p (24).jpeg';
import car12 from '../Images2/p (25).jpeg';
// import car13 from '../Images/car15.png';
// import car22 from '../Images/car22.jpg';
// import car21 from '../Images/car21.jpg';
// import car18 from '../Images/car18.jpg';
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
  padding:50px;
  background:rgba(0,0,0,0.5);
  border-radius:20px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  opacity: 0;
  transform: translateY(50px);
  animation: ${(props) => props.isVisible ? 'flyInFromBottom 3s ease-out forwards' : 'none'};

  @media (max-width: 768px) {
    font-size: 2rem;
  }

   @media (max-width: 428px) {
    font-size: 1.5rem;
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
  font-size: 1.5rem;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(-50px);
  animation: ${(props) => props.isVisible ? 'flyInFromTop 1s ease-out forwards' : 'none'};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

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
  object-position:top;
  flex-shrink: 0;
`;

// Hero Component
const Hero3 = () => {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
//   const theme = useSelector((state)=>state.theme)

  const carImages = [ car3,  car5, car6, car7, car12];
//   const carImages2 = [ car13, car22, car21, car18];

//   const [carImages,setCarImages]=useState(carImages2)

//   useEffect(()=>{
//     if(theme){
//       setCarImages(carImages2)
//     } else{
//       setCarImages(carImages1)
//     }

//   },[theme])
  

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
        <HeroTitle isVisible={isVisible}>ABOUT IKUKU-OMA IDEMILI FOUNDATION</HeroTitle>
        {/* <HeroSubtitle isVisible={isVisible}>
          Transforming Africa’s Transportation, Infrastructure & Energy Landscape.
        </HeroSubtitle> */}
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

export default Hero3;

