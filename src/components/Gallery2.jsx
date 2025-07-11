




import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaTimes } from "react-icons/fa";
import Hero4 from "./Hero4";

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

import p31 from '../Images2/p (31).jpeg';
import p32 from '../Images2/p (32).jpeg';
import p33 from '../Images2/p (33).jpeg';
import p34 from '../Images2/p (34).jpeg';
import p35 from '../Images2/p (35).jpeg';
import p36 from '../Images2/p (36).jpeg';
import p37 from '../Images2/p (37).jpeg';
import p38 from '../Images2/p (38).jpeg';
import p39 from '../Images2/p (39).jpeg';
import p40 from '../Images2/p (40).jpeg';
import p41 from '../Images2/p (41).jpeg';
import p42 from '../Images2/p (42).jpeg';
import p43 from '../Images2/p (43).jpeg';
import p44 from '../Images2/p (44).jpeg';
import p45 from '../Images2/p (45).jpeg';
import p46 from '../Images2/p (46).jpeg';
import p47 from '../Images2/p (47).jpeg';
import p48 from '../Images2/p (48).jpeg';
import p49 from '../Images2/p (49).jpeg';
import p50 from '../Images2/p (50).jpeg';
import p51 from '../Images2/p (51).jpeg';
import p52 from '../Images2/p (52).jpeg';
import p53 from '../Images2/p (53).jpeg';
import p54 from '../Images2/p (54).jpeg';
import p55 from '../Images2/p (55).jpeg';
import p56 from '../Images2/p (56).jpeg';
import p57 from '../Images2/p (57).jpeg';
import p58 from '../Images2/p (58).jpeg';
import p59 from '../Images2/p (59).jpeg';
import p60 from '../Images2/p60.jpeg';
import p61 from '../Images2/p (61).jpeg';
import p62 from '../Images2/p (62).jpeg';
import p63 from '../Images2/p (63).jpeg';
import { useNavigate } from "react-router-dom";

import logo from '../Images2/logo2.jpeg'

// Floating Animation
const floating = keyframes`
  0% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
  50% { transform: translateY(20px) rotate(10deg); opacity: 1; }
  100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
`;

// Background Animation
const rotate = keyframes`
  0% { transform: rotate(0deg); opacity: 0.5; }
  100% { transform: rotate(360deg); opacity: 0.7; }
`;

// Styled Components
// const GalleryWrapper = styled.div`
//   position: relative;
// //   background: linear-gradient(135deg, #ece9e6, #ffffff);
// background:lightgray;
//   padding: 80px 20px;
//   text-align: center;
//   overflow: hidden;

//   @media(max-width:768px){
//     padding-top:10px;
//   }
// `;



const GalleryWrapper = styled.div`
  position: relative;
  background-image: url(${logo}); /* Make sure 'logo' is imported correctly */
  background-attachment: fixed; /* Parallax effect */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 20px;
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.7); /* Fix: removed quotes */
    top: 0;
    left: 0;
    z-index: 1; /* Make sure it overlays background but not content */
  }

  @media (max-width: 768px) {
    padding-top: 10px;
    background-attachment: scroll; /* Fallback for mobile devices */
  }

  /* Ensure content appears above the overlay */
  > * {
    position: relative;
    z-index: 2;
  }
`;


// Floating Artistic Backgrounds
const FloatingShape = styled.div`
  position: absolute;
  width: ${(props) => props.size || "150px"};
  height: ${(props) => props.size || "150px"};
  background: ${(props) => props.bgColor || "rgba(255, 0, 0, 0.3)"};
  border-radius: ${(props) => (props.circle ? "50%" : "20%")};
  top: "50%";
  left: ${(props) => props.left || "10%"};
  animation: ${floating} ${(props) => props.duration || "6s"} infinite ease-in-out;
  z-index: 2;
  filter: blur(5px);
  opacity: 0.8;
`;

const RotatingElement = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border: 6px solid rgba(0, 0, 255, 0.3);
  border-radius: 50%;
  top: 50%;
  right: 15%;
  animation: ${rotate} 15s linear infinite;
  z-index: 1;
`;

// Title
const GalleryTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(0, 0, 255, 0.8);
  margin-bottom: 40px;
  letter-spacing: 3px;
`;

// Irregular Grid Layout
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 220px;
  gap: 20px;
  max-width: 1200px;
  margin: auto;
`;


const GalleryItem = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${(props) => props.border || "10px"};
  border: ${(props) => props.border || "10px"} solid gray; /* 🔵 Single Blue Border */
  grid-column: ${(props) => props.columnSpan || "span 1"};
  grid-row: ${(props) => props.rowSpan || "span 1"};

  &:hover img {
    transform: scale(1.1);
    filter: brightness(80%);
  }
`;



const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.4s ease;
//   border-radius: ${(props) => props.border || "10px"};
`;

// Lightbox Modal
const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90%;
  // width:100%;
  height:100%;
  // max-height: 80%;
  overflow-y: scroll;
`;

const LightboxImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -30px;
  right: -30px;
  background: white;
  color: black;
  border: none;
  padding: 8px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    background: red;
    color: white;
  }
`;

const Button = styled.button`
    background: lightgray;
  color:#119458;
  padding: 10px 20px;
  font-size: 16px;
  font-weight:bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
margin-top:50px;

  &:hover {
    background: white;
  }
`

const images = [
  { src: p1, columnSpan: "span 2", rowSpan: "span 1", border: "20px", border2: "1px" },
  { src: p2, columnSpan: "span 1", rowSpan: "span 2", border: "30px", border2: "1px" },
  { src: p3, columnSpan: "span 1", rowSpan: "span 1", border: "10px", border2: "1px" },
  { src: p4, columnSpan: "span 1", rowSpan: "span 1", border: "15px", border2: "1px" },
  { src: p5, columnSpan: "span 2", rowSpan: "span 2", border: "20px", border2: "1px" },
  { src: p6, columnSpan: "span 2", rowSpan: "span 2", border: "25px", border2: "1px" },
  { src: p7, columnSpan: "span 1", rowSpan: "span 1", border: "12px", border2: "1px" },
  { src: p8, columnSpan: "span 1", rowSpan: "span 2", border: "18px", border2: "1px" },
  { src: p9, columnSpan: "span 2", rowSpan: "span 1", border: "22px", border2: "1px" },
  { src: p10, columnSpan: "span 1", rowSpan: "span 1", border: "14px", border2: "1px" },
  { src: p11, columnSpan: "span 2", rowSpan: "span 2", border: "28px", border2: "1px" },
  { src: p12, columnSpan: "span 1", rowSpan: "span 1", border: "11px", border2: "1px" },
  { src: p13, columnSpan: "span 2", rowSpan: "span 1", border: "16px", border2: "1px" },
  { src: p14, columnSpan: "span 1", rowSpan: "span 2", border: "24px", border2: "1px" },
  { src: p15, columnSpan: "span 1", rowSpan: "span 1", border: "13px", border2: "1px" },
  { src: p16, columnSpan: "span 2", rowSpan: "span 2", border: "26px", border2: "1px" },
  { src: p17, columnSpan: "span 1", rowSpan: "span 1", border: "10px", border2: "1px" },
  { src: p18, columnSpan: "span 1", rowSpan: "span 2", border: "19px", border2: "1px" },
  { src: p19, columnSpan: "span 2", rowSpan: "span 1", border: "21px", border2: "1px" },
  { src: p20, columnSpan: "span 1", rowSpan: "span 1", border: "17px", border2: "1px" },
  { src: p21, columnSpan: "span 2", rowSpan: "span 2", border: "29px", border2: "1px" },
  { src: p22, columnSpan: "span 1", rowSpan: "span 1", border: "12px", border2: "1px" },
  { src: p23, columnSpan: "span 2", rowSpan: "span 1", border: "23px", border2: "1px" },
  { src: p24, columnSpan: "span 1", rowSpan: "span 2", border: "27px", border2: "1px" },
  { src: p25, columnSpan: "span 1", rowSpan: "span 1", border: "11px", border2: "1px" },
  { src: p26, columnSpan: "span 2", rowSpan: "span 2", border: "18px", border2: "1px" },
  { src: p27, columnSpan: "span 1", rowSpan: "span 1", border: "13px", border2: "1px" },
  { src: p28, columnSpan: "span 1", rowSpan: "span 2", border: "20px", border2: "1px" },
  { src: p29, columnSpan: "span 2", rowSpan: "span 1", border: "15px", border2: "1px" },
  { src: p30, columnSpan: "span 1", rowSpan: "span 1", border: "17px", border2: "1px" },
  { src: p31, columnSpan: "span 2", rowSpan: "span 2", border: "25px", border2: "1px" },
  { src: p32, columnSpan: "span 1", rowSpan: "span 1", border: "10px", border2: "1px" },
  { src: p33, columnSpan: "span 2", rowSpan: "span 1", border: "22px", border2: "1px" },
  { src: p34, columnSpan: "span 1", rowSpan: "span 2", border: "28px", border2: "1px" },
  { src: p35, columnSpan: "span 1", rowSpan: "span 1", border: "14px", border2: "1px" },
  { src: p36, columnSpan: "span 2", rowSpan: "span 2", border: "19px", border2: "1px" },
  { src: p37, columnSpan: "span 1", rowSpan: "span 1", border: "13px", border2: "1px" },
  { src: p38, columnSpan: "span 1", rowSpan: "span 2", border: "26px", border2: "1px" },
  { src: p39, columnSpan: "span 2", rowSpan: "span 1", border: "15px", border2: "1px" },
  { src: p40, columnSpan: "span 1", rowSpan: "span 1", border: "12px", border2: "1px" },
  { src: p41, columnSpan: "span 2", rowSpan: "span 2", border: "21px", border2: "1px" },
  { src: p42, columnSpan: "span 1", rowSpan: "span 1", border: "10px", border2: "1px" },
  { src: p43, columnSpan: "span 2", rowSpan: "span 1", border: "24px", border2: "1px" },
  { src: p44, columnSpan: "span 1", rowSpan: "span 2", border: "16px", border2: "1px" },
  { src: p45, columnSpan: "span 1", rowSpan: "span 1", border: "17px", border2: "1px" },
  { src: p46, columnSpan: "span 2", rowSpan: "span 2", border: "27px", border2: "1px" },
  { src: p47, columnSpan: "span 1", rowSpan: "span 1", border: "13px", border2: "1px" },
  { src: p48, columnSpan: "span 1", rowSpan: "span 2", border: "18px", border2: "1px" },
  { src: p49, columnSpan: "span 2", rowSpan: "span 1", border: "22px", border2: "1px" },
  { src: p50, columnSpan: "span 1", rowSpan: "span 1", border: "10px", border2: "1px" },
  { src: p51, columnSpan: "span 2", rowSpan: "span 2", border: "26px", border2: "1px" },
  { src: p52, columnSpan: "span 1", rowSpan: "span 1", border: "11px", border2: "1px" },
  { src: p53, columnSpan: "span 2", rowSpan: "span 1", border: "15px", border2: "1px" },
  { src: p54, columnSpan: "span 1", rowSpan: "span 2", border: "28px", border2: "1px" },
  { src: p55, columnSpan: "span 1", rowSpan: "span 1", border: "12px", border2: "1px" },
  { src: p56, columnSpan: "span 2", rowSpan: "span 2", border: "25px", border2: "1px" },
  { src: p57, columnSpan: "span 1", rowSpan: "span 1", border: "13px", border2: "1px" },
  { src: p58, columnSpan: "span 1", rowSpan: "span 2", border: "19px", border2: "1px" },
  { src: p59, columnSpan: "span 2", rowSpan: "span 1", border: "14px", border2: "1px" },
  { src: p60, columnSpan: "span 1", rowSpan: "span 1", border: "17px", border2: "1px" }
];


const Gallery2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  return (
    <GalleryWrapper>
        <Hero4/>
      {/* Floating Artistic Elements */}
      <FloatingShape top="5%" left="5%" size="180px" bgColor="rgba(255, 0, 0, 0.4)" circle />
      <FloatingShape top="80%" left="80%" size="200px" bgColor="rgba(0, 255, 255, 0.3)" />
      <RotatingElement />

      <GalleryTitle></GalleryTitle>
      <p style={{fontStyle:"italic", marginBottom:"20px", fontWeight:"bold", color:"#119458", padding:"10px", backgroundColor:"lightgray", borderRadius:"5px"}}>(Click image to expand)</p>

      {/* Irregular Image Grid */}
      <GalleryGrid>
        {images.slice(0,6).map((img, index) => (
          <GalleryItem
            key={index}
            columnSpan={img.columnSpan}
            rowSpan={img.rowSpan}
            border={img.border}
            onClick={() => handleImageClick(img.src)}
          >
            <GalleryImage src={img.src} alt={`Gallery Image ${index + 1}`} border={img.border2} />
          </GalleryItem>
        ))}
      </GalleryGrid>

      {/* Lightbox */}
      {selectedImage && (
        <LightboxOverlay onClick={() => setSelectedImage(null)}>
          <LightboxContent>
            <LightboxImage src={selectedImage} alt="Enlarged Image" />
            <CloseButton onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </CloseButton>
          </LightboxContent>
        </LightboxOverlay>
      )}

      <Button onClick={()=>navigate('/gallery')}>Explore More</Button>
    </GalleryWrapper>
  );
};

export default Gallery2;
