



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



import r1 from '../Images2/r (1).jpeg';
import r2 from '../Images2/r (2).jpeg';
import r3 from '../Images2/r (3).jpeg';
import r4 from '../Images2/r (4).jpeg';
import r5 from '../Images2/r (5).jpeg';
import r6 from '../Images2/r (6).jpeg';
import r7 from '../Images2/r (7).jpeg';
import r8 from '../Images2/r (8).jpeg';
import r9 from '../Images2/r (9).jpeg';
import r10 from '../Images2/r (10).jpeg';
import r11 from '../Images2/r (11).jpeg';
import r12 from '../Images2/r (12).jpeg';
import r13 from '../Images2/r (13).jpeg';
import r14 from '../Images2/r (14).jpeg';
import r15 from '../Images2/r (15).jpeg';
import r16 from '../Images2/r (16).jpeg';
import r17 from '../Images2/r (17).jpeg';
import r18 from '../Images2/r (18).jpeg';
import r19 from '../Images2/r (19).jpeg';
import r20 from '../Images2/r (20).jpeg';
import r21 from '../Images2/r (21).jpeg';
import r22 from '../Images2/r (22).jpeg';
import r23 from '../Images2/r (23).jpeg';
import r24 from '../Images2/r (24).jpeg';
import r25 from '../Images2/r (25).jpeg';
import r26 from '../Images2/r (26).jpeg';
import r27 from '../Images2/r (27).jpeg';
import r28 from '../Images2/r (28).jpeg';
import r29 from '../Images2/r (29).jpeg';
import r30 from '../Images2/r (30).jpeg';
import r31 from '../Images2/r (31).jpeg';
import r32 from '../Images2/r (32).jpeg';
import r33 from '../Images2/r (33).jpeg';
import r34 from '../Images2/r (34).jpeg';
import r35 from '../Images2/r (35).jpeg';
import r36 from '../Images2/r (36).jpeg';
import r37 from '../Images2/r (37).jpeg';
import r38 from '../Images2/r (38).jpeg';
import r39 from '../Images2/r (39).jpeg';
import r40 from '../Images2/r (40).jpeg';
import r41 from '../Images2/r (41).jpeg';
import r42 from '../Images2/r (42).jpeg';
import r43 from '../Images2/r (43).jpeg';
import r44 from '../Images2/r (44).jpeg';
import r45 from '../Images2/r (45).jpeg';
import r46 from '../Images2/r (46).jpeg';
import r47 from '../Images2/r (47).jpeg';
import r48 from '../Images2/r (48).jpeg';
import r49 from '../Images2/r (49).jpeg';
import r50 from '../Images2/r (50).jpeg';
import r51 from '../Images2/r (51).jpeg';
import r52 from '../Images2/r (52).jpeg';
import r53 from '../Images2/r (53).jpeg';
import r54 from '../Images2/r (54).jpeg';
import r55 from '../Images2/r (55).jpeg';
import r56 from '../Images2/r (56).jpeg';
import r57 from '../Images2/r (57).jpeg';
import r58 from '../Images2/r (58).jpeg';
import r59 from '../Images2/r (59).jpeg';
import r60 from '../Images2/r (60).jpeg';
import r61 from '../Images2/r (61).jpeg';
import r62 from '../Images2/r (62).jpeg';
import r63 from '../Images2/r (63).jpeg';
import r64 from '../Images2/r (64).jpeg';
import r65 from '../Images2/r (65).jpeg';
import r66 from '../Images2/r (66).jpeg';
import r67 from '../Images2/r (67).jpeg';
import r68 from '../Images2/r (68).jpeg';
import r69 from '../Images2/r (69).jpeg';
import r70 from '../Images2/r (70).jpeg';
import r71 from '../Images2/r (71).jpeg';
import r72 from '../Images2/r (72).jpeg';
import r73 from '../Images2/r (73).jpeg';
import r74 from '../Images2/r (74).jpeg';
import r75 from '../Images2/r (75).jpeg';
import r76 from '../Images2/r (76).jpeg';
import r77 from '../Images2/r (77).jpeg';
import r78 from '../Images2/r (78).jpeg';
import r79 from '../Images2/r (79).jpeg';
import r80 from '../Images2/r (80).jpeg';
import r81 from '../Images2/r (81).jpeg';
import r82 from '../Images2/r (82).jpeg';
import r83 from '../Images2/r (83).jpeg';
import r84 from '../Images2/r (84).jpeg';
import r85 from '../Images2/r (85).jpeg';
import r86 from '../Images2/r (86).jpeg';
import r87 from '../Images2/r (87).jpeg';
import r88 from '../Images2/r (88).jpeg';
import r89 from '../Images2/r (89).jpeg';
import r90 from '../Images2/r (90).jpeg';
import r91 from '../Images2/r (91).jpeg';
import r92 from '../Images2/r (92).jpeg';
import r93 from '../Images2/r (93).jpeg';
import r94 from '../Images2/r (94).jpeg';
import r95 from '../Images2/r (95).jpeg';
import r96 from '../Images2/r (96).jpeg';
import r97 from '../Images2/r97.jpeg';
import r98 from '../Images2/r98.jpeg';
import r99 from '../Images2/r99.jpeg';



import logo from '../Images2/logo.jpeg';



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
    background: rgba(0, 0, 0, 0.5); /* Fix: removed quotes */
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
  { src: p60, columnSpan: "span 1", rowSpan: "span 1", border: "17px", border2: "1px" },

  { src: r1, columnSpan: "span 2", rowSpan: "span 1", border: "11px", border2: "1px" },
  { src: r2, columnSpan: "span 1", rowSpan: "span 2", border: "12px", border2: "1px" },
  { src: r3, columnSpan: "span 2", rowSpan: "span 2", border: "13px", border2: "1px" },
  { src: r4, columnSpan: "span 1", rowSpan: "span 1", border: "14px", border2: "1px" },
  { src: r5, columnSpan: "span 2", rowSpan: "span 1", border: "15px", border2: "1px" },
  { src: r6, columnSpan: "span 1", rowSpan: "span 2", border: "16px", border2: "1px" },
  { src: r7, columnSpan: "span 2", rowSpan: "span 2", border: "17px", border2: "1px" },
  { src: r8, columnSpan: "span 1", rowSpan: "span 1", border: "18px", border2: "1px" },
  { src: r9, columnSpan: "span 2", rowSpan: "span 1", border: "19px", border2: "1px" },
  { src: r10, columnSpan: "span 1", rowSpan: "span 2", border: "20px", border2: "1px" },
  { src: r11, columnSpan: "span 2", rowSpan: "span 2", border: "21px", border2: "1px" },
  { src: r12, columnSpan: "span 1", rowSpan: "span 1", border: "22px", border2: "1px" },
  { src: r13, columnSpan: "span 2", rowSpan: "span 1", border: "23px", border2: "1px" },
  { src: r14, columnSpan: "span 1", rowSpan: "span 2", border: "24px", border2: "1px" },
  { src: r15, columnSpan: "span 2", rowSpan: "span 2", border: "25px", border2: "1px" },
  { src: r16, columnSpan: "span 1", rowSpan: "span 1", border: "26px", border2: "1px" },
  { src: r17, columnSpan: "span 2", rowSpan: "span 1", border: "27px", border2: "1px" },
  { src: r18, columnSpan: "span 1", rowSpan: "span 2", border: "28px", border2: "1px" },
  { src: r19, columnSpan: "span 2", rowSpan: "span 2", border: "29px", border2: "1px" },
  { src: r20, columnSpan: "span 1", rowSpan: "span 1", border: "30px", border2: "1px" },
  { src: r21, columnSpan: "span 2", rowSpan: "span 1", border: "10px", border2: "1px" },
  { src: r22, columnSpan: "span 1", rowSpan: "span 2", border: "11px", border2: "1px" },
  { src: r23, columnSpan: "span 2", rowSpan: "span 2", border: "12px", border2: "1px" },
  { src: r24, columnSpan: "span 1", rowSpan: "span 1", border: "13px", border2: "1px" },
  { src: r25, columnSpan: "span 2", rowSpan: "span 1", border: "14px", border2: "1px" },
  { src: r26, columnSpan: "span 1", rowSpan: "span 2", border: "15px", border2: "1px" },
  { src: r27, columnSpan: "span 2", rowSpan: "span 2", border: "16px", border2: "1px" },
  { src: r28, columnSpan: "span 1", rowSpan: "span 1", border: "17px", border2: "1px" },
  { src: r29, columnSpan: "span 2", rowSpan: "span 1", border: "18px", border2: "1px" },
  { src: r30, columnSpan: "span 1", rowSpan: "span 2", border: "19px", border2: "1px" },
  { src: r31, columnSpan: "span 2", rowSpan: "span 2", border: "20px", border2: "1px" },
  { src: r32, columnSpan: "span 1", rowSpan: "span 1", border: "21px", border2: "1px" },
  { src: r33, columnSpan: "span 2", rowSpan: "span 1", border: "22px", border2: "1px" },
  { src: r34, columnSpan: "span 1", rowSpan: "span 2", border: "23px", border2: "1px" },
  { src: r35, columnSpan: "span 2", rowSpan: "span 2", border: "24px", border2: "1px" },
  { src: r36, columnSpan: "span 1", rowSpan: "span 1", border: "25px", border2: "1px" },
  { src: r37, columnSpan: "span 2", rowSpan: "span 1", border: "26px", border2: "1px" },
  { src: r38, columnSpan: "span 1", rowSpan: "span 2", border: "27px", border2: "1px" },
  { src: r39, columnSpan: "span 2", rowSpan: "span 2", border: "28px", border2: "1px" },
  { src: r40, columnSpan: "span 1", rowSpan: "span 1", border: "29px", border2: "1px" },


  
  { src: r41, columnSpan: "span 2", rowSpan: "span 1", border: "11px", border2: "1px" },
  { src: r42, columnSpan: "span 1", rowSpan: "span 2", border: "12px", border2: "1px" },
  { src: r43, columnSpan: "span 2", rowSpan: "span 2", border: "13px", border2: "1px" },
  { src: r44, columnSpan: "span 1", rowSpan: "span 1", border: "14px", border2: "1px" },
  { src: r45, columnSpan: "span 2", rowSpan: "span 1", border: "15px", border2: "1px" },
  { src: r46, columnSpan: "span 1", rowSpan: "span 2", border: "16px", border2: "1px" },
  { src: r47, columnSpan: "span 2", rowSpan: "span 2", border: "17px", border2: "1px" },
  { src: r48, columnSpan: "span 1", rowSpan: "span 1", border: "18px", border2: "1px" },
  { src: r49, columnSpan: "span 2", rowSpan: "span 1", border: "19px", border2: "1px" },
  { src: r50, columnSpan: "span 1", rowSpan: "span 2", border: "20px", border2: "1px" },
  { src: r51, columnSpan: "span 2", rowSpan: "span 2", border: "21px", border2: "1px" },
  { src: r52, columnSpan: "span 1", rowSpan: "span 1", border: "22px", border2: "1px" },
  { src: r53, columnSpan: "span 2", rowSpan: "span 1", border: "23px", border2: "1px" },
  { src: r54, columnSpan: "span 1", rowSpan: "span 2", border: "24px", border2: "1px" },
  { src: r55, columnSpan: "span 2", rowSpan: "span 2", border: "25px", border2: "1px" },
  { src: r56, columnSpan: "span 1", rowSpan: "span 1", border: "26px", border2: "1px" },
  { src: r57, columnSpan: "span 2", rowSpan: "span 1", border: "27px", border2: "1px" },
  { src: r58, columnSpan: "span 1", rowSpan: "span 2", border: "28px", border2: "1px" },
  { src: r59, columnSpan: "span 2", rowSpan: "span 2", border: "29px", border2: "1px" },
  { src: r60, columnSpan: "span 1", rowSpan: "span 1", border: "30px", border2: "1px" },
  { src: r61, columnSpan: "span 2", rowSpan: "span 1", border: "10px", border2: "1px" },
  { src: r62, columnSpan: "span 1", rowSpan: "span 2", border: "11px", border2: "1px" },
  { src: r63, columnSpan: "span 2", rowSpan: "span 2", border: "12px", border2: "1px" },
  { src: r64, columnSpan: "span 1", rowSpan: "span 1", border: "13px", border2: "1px" },
  { src: r65, columnSpan: "span 2", rowSpan: "span 1", border: "14px", border2: "1px" },
  { src: r66, columnSpan: "span 1", rowSpan: "span 2", border: "15px", border2: "1px" },
  { src: r67, columnSpan: "span 2", rowSpan: "span 2", border: "16px", border2: "1px" },
  { src: r68, columnSpan: "span 1", rowSpan: "span 1", border: "17px", border2: "1px" },
  { src: r69, columnSpan: "span 2", rowSpan: "span 1", border: "18px", border2: "1px" },
  { src: r70, columnSpan: "span 1", rowSpan: "span 2", border: "19px", border2: "1px" },
  { src: r71, columnSpan: "span 2", rowSpan: "span 2", border: "20px", border2: "1px" },
  { src: r72, columnSpan: "span 1", rowSpan: "span 1", border: "21px", border2: "1px" },
  { src: r73, columnSpan: "span 2", rowSpan: "span 1", border: "22px", border2: "1px" },
  { src: r74, columnSpan: "span 1", rowSpan: "span 2", border: "23px", border2: "1px" },
  { src: r75, columnSpan: "span 2", rowSpan: "span 2", border: "24px", border2: "1px" },
  { src: r76, columnSpan: "span 1", rowSpan: "span 1", border: "25px", border2: "1px" },
  { src: r77, columnSpan: "span 2", rowSpan: "span 1", border: "26px", border2: "1px" },
  { src: r78, columnSpan: "span 1", rowSpan: "span 2", border: "27px", border2: "1px" },
  { src: r79, columnSpan: "span 2", rowSpan: "span 2", border: "28px", border2: "1px" },
  { src: r80, columnSpan: "span 1", rowSpan: "span 1", border: "29px", border2: "1px" },


  { src: r81, columnSpan: "span 2", rowSpan: "span 1", border: "11px", border2: "1px" },
  { src: r82, columnSpan: "span 1", rowSpan: "span 2", border: "12px", border2: "1px" },
  { src: r83, columnSpan: "span 2", rowSpan: "span 2", border: "13px", border2: "1px" },
  { src: r84, columnSpan: "span 1", rowSpan: "span 1", border: "14px", border2: "1px" },
  { src: r85, columnSpan: "span 2", rowSpan: "span 1", border: "15px", border2: "1px" },
  { src: r86, columnSpan: "span 1", rowSpan: "span 2", border: "16px", border2: "1px" },
  { src: r87, columnSpan: "span 2", rowSpan: "span 2", border: "17px", border2: "1px" },
  { src: r88, columnSpan: "span 1", rowSpan: "span 1", border: "18px", border2: "1px" },
  { src: r89, columnSpan: "span 2", rowSpan: "span 1", border: "19px", border2: "1px" },
  { src: r90, columnSpan: "span 1", rowSpan: "span 2", border: "20px", border2: "1px" },
 { src: r91, columnSpan: "span 2", rowSpan: "span 1", border: "11px", border2: "1px" },
  { src: r92, columnSpan: "span 1", rowSpan: "span 2", border: "12px", border2: "1px" },
  { src: r93, columnSpan: "span 2", rowSpan: "span 2", border: "13px", border2: "1px" },
  { src: r94, columnSpan: "span 1", rowSpan: "span 1", border: "14px", border2: "1px" },
  { src: r95, columnSpan: "span 2", rowSpan: "span 1", border: "15px", border2: "1px" },
  { src: r96, columnSpan: "span 1", rowSpan: "span 2", border: "16px", border2: "1px" },
    { src: r97, columnSpan: "span 2", rowSpan: "span 1", border: "14px", border2: "1px" },
  { src: r98, columnSpan: "span 2", rowSpan: "span 2", border: "15px", border2: "1px" },
  { src: r99, columnSpan: "span 2", rowSpan: "span 2", border: "16px", border2: "1px" },

];



const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
        {images.map((img, index) => (
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
    </GalleryWrapper>
  );
};

export default Gallery;
