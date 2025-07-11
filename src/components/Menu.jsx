import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// Slide down animation
const slideDown = keyframes`
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Slide up animation
const slideUp = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-10px); }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 70px;
  right: 10px;
  z-index: 1000;


  @media(max-width:768px){
    top:70px;

    span{
        display:none;
    }
  }

  @media(max-width:320px){
    top:90px;
  }
  
`;

const MenuButton = styled.div`
//   background: #ff5722;
  // background:#3498db;
  background:#119458;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.9);
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  display:none;

  @media(max-width:768px){
    padding:6px 10px;
    display:block;
  }
  
  &:hover {
    background: #3498db;
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 50px;
  right: 0;
  background: white;
  width: 200px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: hidden;
  animation: ${({ isOpen }) => (isOpen ? slideDown : slideUp)} 0.4s ease-out;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const MenuItem = styled.li`
  padding: 12px 15px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s;
  color: #000050;
  
  &:hover {
    background: lightgray;
  }
`;

// Icons
const menuItems = [
  { name: "🏠 Home", link: "/" },
  { name: "ℹ️ About Us", link: "/aboutus" },
  // { name: "🛡️ Our Recognition", link: "/authenticity" },
  // {name:"🏛️ INEC Engagement" , link:"/inecengagement"},
  { name: "🖼️ Gallery & Awards", link: "/gallery" },
  { name: "💖 Donate", link: "/donate" },
    { name: "📚 Blogs", link: "/blogs" },
   
  { name: "📞 Contact us", link: "/contactus" },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  const closeMenu = (e) => {
    if (!e.target.closest("#menu-container")) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <MenuContainer id="menu-container">
      <MenuButton onClick={toggleMenu} onMouseEnter={()=>setIsOpen(true)}>📜 <span>View</span> Menu</MenuButton>
      <Dropdown isOpen={isOpen}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => {setIsOpen(false);navigate(`${item.link}`)}} >
            {item.name}
          </MenuItem>
        ))}
      </Dropdown>
    </MenuContainer>
  );
};

export default Menu;
