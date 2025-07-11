import React from "react";
import styled, { keyframes } from "styled-components";
import logo from '../Images2/logo2.jpeg'
import { useLocation, useNavigate } from "react-router-dom";

const gradientAnimation = keyframes`
  0% { color:red; }
  25% { color: blue; }
  50% { color: green; }
  75% { color: blue; }
  100% { color:purple; }
`;


const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// const gradientAnimation = keyframes`
//   0% { color: #ff6b6b; }   /* Soft Red */
//   25% { color: #f6b93b; }   /* Golden Yellow */
//   50% { color: #1dd1a1; }   /* Teal Green */
//   75% { color: #54a0ff; }   /* Sky Blue */
//   100% { color: #5f27cd; }  /* Royal Purple */
// `;


const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // background: #000080;
  background:#119458;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  z-index: 1000;
 


@media(max-width:884px){
    flex-direction:column;
    // position:relative;
}


`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  cursor:pointer;
  border-radius:10px;
  // animation: ${rotateAnimation} 10s linear infinite; /* 2s duration, infinite loop */

@media(max-width:884px){
    width:80px;
}

@media(max-width:428px){
    width:60px;
}
`;

const Logo2 = styled.img`
  width: 150px;
  height: auto;
  cursor:pointer;
  border-radius:10px;
  // animation: ${rotateAnimation} 10s linear infinite; /* 2s duration, infinite loop */

  @media(max-width:884px){
    display:none;
  }
 
  
`;

const TitleContainer = styled.div`
  text-align: center;
  flex-grow: 1;
`;

const Title = styled.h1`
//   font-size: 22px;
color:white;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5rem;  /* Increases space between letters */
  word-spacing: 6px;    /* Increases space between words */
  // animation: ${gradientAnimation} 4s infinite alternate;

@media(max-width:884px){
      letter-spacing: 0.1rem;  /* Increases space between letters */
  word-spacing: 6px;    /* Increases space between words */
  font-weight:bold;
  font-size:20px;
}

`;


const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  animation: ${gradientAnimation} 4s infinite alternate-reverse;
`;

const MenuWrap = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:40px;
  margin-top:10px;

  p {
  cursor: pointer;
  color: white;
  font-weight: 500;


  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px; /* Increase thickness */
  
  }
}

@media(max-width:768px){
display:none;
}
    
  }
`

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <HeaderWrap>
      <Logo src={logo} alt="NGO Logo" onClick={()=>navigate('/')}/>
      <TitleContainer>
        <Title>IKUKU-OMA IDEMILI FOUNDATION</Title>
        <MenuWrap>
          <p onClick={()=>navigate('/')} style={{textDecoration:location.pathname==='/'?"underline":"", textDecorationThickness:"3px"}}>HOME</p>
          <p onClick={()=>navigate('/aboutus')} style={{textDecoration:location.pathname==='/aboutus'?"underline":""}}>ABOUT</p>
          <p onClick={()=>navigate('/gallery')} style={{textDecoration:location.pathname==='/gallery'?"underline":""}}>GALLERY & AWARDS</p>
          <p onClick={()=>navigate('/donate')} style={{textDecoration:location.pathname==='/donate'?"underline":""}}>DONATE</p>
          <p onClick={()=>navigate('/blogs')} style={{textDecoration:location.pathname==='/blogs'?"underline":"", textDecorationThickness:"3px"}}>BLOGS</p>
          <p onClick={()=>navigate('/contactus')} style={{textDecoration:location.pathname==='/contactus'?"underline":"", textDecorationThickness:"3px"}}>CONTACT US</p>
        </MenuWrap>
        {/* <Subtitle>(FOR COMMUNITY DEVELOPMENT AND STABILITY)</Subtitle> */}
      </TitleContainer>
      <Logo2 src={logo} alt="NGO Logo" onClick={()=>navigate('/')}/>
    </HeaderWrap>
  );
};

export default Header;
