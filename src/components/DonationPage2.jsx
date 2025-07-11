
// import React from "react";
// import styled, { keyframes } from "styled-components";

// // Animations
// const pulse = keyframes`
//   0% { transform: scale(1); opacity: 1; }
//   50% { transform: scale(1.05); opacity: 0.8; }
//   100% { transform: scale(1); opacity: 1; }
// `;

// const flicker = keyframes`
//   0%, 100% { opacity: 1; }
//   50% { opacity: 0.4; }
// `;

// // Styled Components
// const Page = styled.div`
//   background: linear-gradient(135deg, #ff0080, #7928ca);
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   color: white;
//   text-align: center;
//   font-family: 'Comic Sans MS', cursive, sans-serif;
//   border-radius:50px;
// `;

// const Title = styled.h1`
//   font-size: 4rem;
//   text-shadow: 0 0 10px #fff, 0 0 30px #ff00ff;
//   animation: ${flicker} 1s infinite;
// `;

// const Card = styled.div`
//   background: rgba(255, 255, 255, 0.1);
//   border: 4px dashed #fff;
//   border-radius: 20px;
//   padding: 2rem;
//   margin-top: 2rem;
//   box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
//   animation: ${pulse} 3s infinite;
// `;

// const Label = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 1rem;
// `;

// const BankInfo = styled.div`
//   font-size: 1.5rem;
//   background: #00000080;
//   padding: 1rem 2rem;
//   border-radius: 12px;
//   font-weight: bold;
//   color: #00ffcc;
//   border: 2px solid #00ffcc;
//   box-shadow: 0 0 10px #00ffcc;
//   margin-top: 1rem;
// `;

// const DonateButton = styled.a`
//   margin-top: 2rem;
//   display: inline-block;
//   background: #00ffcc;
//   color: #000;
//   font-weight: bold;
//   padding: 1rem 2rem;
//   border-radius: 50px;
//   text-decoration: none;
//   font-size: 1.2rem;
//   box-shadow: 0 0 15px #00ffcc;
//   transition: transform 0.3s ease;
//   &:hover {
//     transform: scale(1.1);
//     background: #00ffaa;
//   }
// `;

// export default function DonationPage2() {
//   return (
//     <Page>
//       <Title>💥 Make It Rain for a Cause! 💥</Title>
//       <Card>
//         <Label>Donate via Bank Transfer</Label>
//         <BankInfo>
//              Account Name: <strong>IKUKUOMA IDEMILI FOUNDATION</strong><br/>
//           Account Number: <strong>1228780482</strong><br />
         
//           Bank: <strong>Zenith Bank</strong>

//         </BankInfo>
//         <BankInfo>
//             Please send proof of payment to : +234 803 349 4645
//         </BankInfo>

//       </Card>
//     </Page>
//   );
// }



import React from "react";
import styled, { keyframes } from "styled-components";

// Animations
const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

const flicker = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

// Styled Components
const Page = styled.div`
  background: linear-gradient(135deg, rgba(0, 100, 0, 0.1), rgba(0, 50, 0, 0.5));
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  text-align: center;
//   font-family: 'Comic Sans MS', cursive, sans-serif;
font-family:Arial;
  border-radius: 50px;
  padding: 2rem;

  @media(max-width:768px){
    padding:1rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  text-shadow: 0 0 10px #fff, 0 0 30px #00ff7f;
  animation: ${flicker} 1s infinite;
  color: green;

  @media(max-width:728px){
    font-size:2rem;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 4px dashed green;
  border-radius: 20px;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0 0 30px rgba(204, 255, 0, 0.5);
  animation: ${pulse} 3s infinite;
  max-width: 600px;

  @media(max-width:768px){
    padding:1rem;
  }
`;

const Label = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: green;
`;

const BankInfo = styled.div`
  font-size: 1.3rem;
  background: #002b00aa;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: bold;
  color: #ccff00;
  border: 2px solid #ccff00;
  box-shadow: 0 0 10px #ccff00;
  margin-top: 1rem;
`;

const DonateButton = styled.a`
  margin-top: 2rem;
  display: inline-block;
  background: #ccff00;
  color: #003300;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.2rem;
  box-shadow: 0 0 15px #ccff00;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
    background: #bfff00;
  }
`;

export default function DonationPage2() {
  return (
    <Page>
      <Title>🌿 Support the Cause 🌿</Title>
      <Card>
        <Label>Donate via Bank Transfer</Label>
        <BankInfo>
          Account Name: <strong>IKUKUOMA IDEMILI FOUNDATION</strong><br />
          Account Number: <strong>1228780482</strong><br />
          Bank: <strong>Zenith Bank</strong>
        </BankInfo>
        <BankInfo>
          Please send proof of payment to: <strong>+234 803 349 4645</strong>
        </BankInfo>
    
      </Card>
    </Page>
  );
}

