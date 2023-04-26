import Script from 'next/script';
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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BFPZP8FQ7V" />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BFPZP8FQ7V');
        `}
      </Script>
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
