import {
  MutableRefObject,
  useEffect,
  useState,
  useRef,
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

interface Section {
  containerRef: MutableRefObject<HTMLDivElement | null>,
  name: string,
}

const opts: IntersectionObserverInit = {
  threshold: 0,
  rootMargin: '100px 0px -100px 0px',
}

function useTrackPagePosition(sections: Array<Section>, setter: any) {
  const firstRender = useRef(true)

  /**
   * loop over ref, create an intersection observer for each one
   */
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ containerRef, name }) => {
      if (containerRef.current && name) {
        const ie = new IntersectionObserver(() => setter(name), opts)
        ie.observe(containerRef.current)
        observers.push(ie)
      }
    })

    if (firstRender.current) {
      firstRender.current = false
      setter('home')
    }

    return () => {
      observers.forEach((x, i) =>
        // @ts-ignore this has typecheck you stupid fuck compiler
        sections[i].containerRef.current ? x.unobserve(sections[i].containerRef.current) : null)
    }
  }, [...sections.map(sec => sec.containerRef.current)])
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const homeRef = useRef<HTMLDivElement | null>(null)
  const featuresRef = useRef<HTMLDivElement | null>(null)
  const locationRef = useRef<HTMLDivElement | null>(null)
  const valueRef = useRef<HTMLDivElement | null>(null)
  const ownershipRef = useRef<HTMLDivElement | null>(null)
  const financingRef = useRef<HTMLDivElement | null>(null)
  const projectRef = useRef<HTMLDivElement | null>(null)

  useTrackPagePosition([{
    containerRef: homeRef,
    name: 'home',
  }, {
    containerRef: featuresRef,
    name: 'features',
  }, {
    containerRef: locationRef,
    name: 'location',
  }, {
    containerRef: valueRef,
    name: 'value',
  }, {
    containerRef: ownershipRef,
    name: 'ownership',
  }, {
    containerRef: financingRef,
    name: 'financing',
  }, {
    containerRef: projectRef,
    name: 'project',
  }], setActiveSection)

  return (
    <>
      <Header activeSection={activeSection} />
      <HeroSection ref={homeRef} />
      <div><h1 className='text-center py-24'>Video</h1></div>
      <BuildingFeatures ref={featuresRef} />
      <Location ref={locationRef} />
      <ValueProposition ref={valueRef} />
      <Ownership ref={ownershipRef} />
      <Financing ref={financingRef} />
      <ProjectTeam ref={projectRef} />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
