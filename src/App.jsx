import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import HeaderComponent from './components/HeaderComponent';
import AboutComponent from './components/AboutComponent';
import FooterComponent from './components/FooterComponent';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeaderComponent />
      <AboutComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
