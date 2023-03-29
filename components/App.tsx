import {
  MutableRefObject,
} from 'react';
import BuildingFeatures from './BuildingFeatures';
import ContactForm from './ContactForm';
import Financing from './Financing';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import Location from './Location';
import Ownership from './Ownership';
import ProjectTeam from './ProjectTeam';
import ValueProposition from './ValueProposition';
import Video from './Video';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Video />
      <BuildingFeatures />
      <Location />
      <ValueProposition />
      <Ownership />
      <Financing />
      <ProjectTeam />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
