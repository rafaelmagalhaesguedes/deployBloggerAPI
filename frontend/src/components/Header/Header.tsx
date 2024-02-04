import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaUser } from 'react-icons/fa';
import { useAuth } from '../../context/auth';
import { HeaderContainer, Navbar, DropdownMenu, DropdownItem, Logo, UserInfo, MenuHeader, MenuTop } from './Style';
import { useState } from 'react';

function Header() {
  const { user, Logout } = useAuth() as any;
  const [isOpen, setIsOpen] = useState(false);
  
  const handleLogout = () => {
    Logout();
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MenuTop>
        <span>Turma 34 - Backend - Trybe</span>
        <div>
          <Link to="#"><FaLinkedin /></Link>
          <Link to="https://github.com/rafaelmagalhaesguedes" target='_blank'><FaGithub /></Link>
        </div>
      </MenuTop>
      <HeaderContainer>
        <Logo>
          <h1><Link to="/">Project Blog's API</Link></h1>
        </Logo>
        <UserInfo>
          <span>{user.displayName}</span>
          <span>
            {user.image === 'imagen' ? <FaUser /> : <img src={user.image} alt="User" />}
          </span>
        </UserInfo>
        <MenuHeader>
          <Navbar onClick={toggleMenu}>
            <div className="hamburger">
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </div>
          </Navbar>
          {isOpen && (
            <DropdownMenu>
              <DropdownItem>
                <Link to="/profile" onClick={closeMenu}>Profile</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/user-posts" onClick={closeMenu}>My Posts</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/" onClick={handleLogout}>
                  Logout
                </Link>
              </DropdownItem>
            </DropdownMenu>
          )}
        </MenuHeader>
      </HeaderContainer>
    </>
  );
}

export default Header;