import {
  MutableRefObject,
  useEffect,
  useState,
  useRef,
} from 'react';
import BuildingFeatures from './BuildingFeatures';
import ContactForm from './ContactForm';
import Financing from './Financing';
import Header from './Header';
import HeroSection from './HeroSection';
import Location from './Location';
import Ownership from './Ownership';
import ProjectTeam from './ProjectTeam';
import ValueProposition from './ValueProposition';

interface Section {
  containerRef: MutableRefObject<HTMLDivElement | null>,
  cb: any,
}

const opts = {
  threshold: 0,
}

function useTrackPagePosition(sections: Array<Section>) {
  /**
   * loop over ref, create an intersection observer for each one
   */
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ containerRef, cb }) => {
      if (containerRef.current && cb) {
        const ie = new IntersectionObserver(cb, opts)
        ie.observe(containerRef.current)
        observers.push(ie)
      }
    })

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
    cb: () => setActiveSection('home'),
  }, {
    containerRef: featuresRef,
    cb: () => setActiveSection('features'),
  }, {
    containerRef: locationRef,
    cb: () => setActiveSection('location'),
  }, {
    containerRef: valueRef,
    cb: () => setActiveSection('value'),
  }, {
    containerRef: ownershipRef,
    cb: () => setActiveSection('ownership'),
  }, {
    containerRef: financingRef,
    cb: () => setActiveSection('financing'),
  }, {
    containerRef: projectRef,
    cb: () => setActiveSection('project'),
  }])

  console.log('active sects', activeSection)

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
    </>
  );
}

export default App;
