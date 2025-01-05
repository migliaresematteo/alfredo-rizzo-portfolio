import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NavbarComponent = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar bg="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{t('nav.home')}</Nav.Link>
            <Nav.Link href="#about">{t('nav.about')}</Nav.Link>
            <Nav.Link href="#contact">{t('nav.contact')}</Nav.Link>
          </Nav>
          <NavDropdown 
            title={i18n.language === 'en' ? '🇬🇧 EN' : '🇮🇹 IT'} 
            id="language-dropdown"
          >
            <NavDropdown.Item onClick={() => changeLanguage('en')}>
              🇬🇧 English
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage('it')}>
              🇮🇹 Italiano
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
