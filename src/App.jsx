import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import HeaderComponent from './components/HeaderComponent';
import AboutComponent from './components/AboutComponent';
import LessonsComponent from './components/LessonsComponent';
import RepertoireComponent from './components/RepertoireComponent';
import PerformancesComponent from './components/PerformancesComponent';
import FooterComponent from './components/FooterComponent';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeaderComponent />
      <AboutComponent />
      <LessonsComponent />
      <RepertoireComponent />
      <PerformancesComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
