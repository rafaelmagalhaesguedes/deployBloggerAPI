import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
          <Link to="#"><FaGithub /></Link>
          <Link to="#"><FaLinkedin /></Link>
        </div>
      </MenuTop>
      <HeaderContainer>
        <Logo>
          <h1>Project Blog's API</h1>
        </Logo>
        <UserInfo>
          <p>{user.displayName}</p>
          <img src={user.image} alt={user.displayName} />
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