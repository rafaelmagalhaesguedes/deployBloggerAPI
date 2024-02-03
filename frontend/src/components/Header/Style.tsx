import styled from "styled-components";

export const MenuTop = styled.div`
  background-color: #000;
  width: 80%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    padding-top: 5px;
  }

  div {
    display: flex;
    gap: 10px;
  }

  span {
    color: #fff;
    font-size: 0.8rem;
    padding: 0 10px;
    letter-spacing: 1px;
    font-weight: 300;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #EFECEC;
  width: 80%;
  height: 80px;
  margin: 0 auto;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  .hamburger {
    width: 30px;
    height: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .hamburger-line {
    width: 100%;
    height: 2px;
    background-color: #000;
  }

`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 10%;
  top: 80px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
    a {
        text-decoration: none;
        color: black;
    }
`;

export const Logo = styled.div`
width: 70%;
  h1 {
    margin: 0;
    padding: 10px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  span {
    margin: 0;
    padding: 10px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const MenuHeader = styled.div``;