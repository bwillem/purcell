import {
  MutableRefObject,
  useEffect,
  useState,
  useRef,
} from 'react';
import './App.css';
import BuildingFeatures from './BuildingFeatures';
import H2 from './H2';
import Header from './Header';
import HeroSection from './HeroSection';
import Supertitle from './Supertitle';

interface Section {
  containerRef: MutableRefObject<HTMLDivElement | null>,
  cb: any,
}

function useTrackPagePosition(sections: Array<Section>) {
  /**
   * loop over ref, create an intersection observer for each one
   */
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    if (sections.every(section => section.containerRef.current)) {
      sections.map(({ containerRef, cb }, i) => {
        observers.push(new IntersectionObserver(cb))

        if (containerRef.current && cb) {
          observers[i].observe(containerRef.current)
        }
      })
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
    <div>
      <aside>
        <div className="w-full bg-brand">
          <div className="container mx-auto flex items-center justify-end">
            <div className='flex p-1'>
              <a className='text-sm text-white'>Download brochure</a>
              <p className='text-sm text-white px-2'>|</p>
              <a className='text-sm text-white'>Download unit plans</a>
            </div>
          </div>
        </div>
      </aside>
      <Header />
      <HeroSection ref={homeRef} />
      <div className='w-full flex' style={{
        backgroundColor: '#1C1C1C',
        backgroundImage: `url(/img/purcell-business-center.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
        backgroundSize: '50% 100%',
      }}>
        <div className='container mx-auto'>
          <div className='w-full lg:w-1/2 py-24 space-y-8'>
            <div className='space-y-3'>
              <Supertitle>
                Nelson, BC
              </Supertitle>
              <H2>1155 Insight Drive</H2>
            </div>
            <p className='text-white text-base max-w-[32em]'>
              <span className='font-bold'>Purcell Business Center </span>
              represents the highest quality flex-industrial real estate offering in the Kootenays, comprising of 16 thoughtfully designed units ranging in size from 2,470 to 7,778 SF. Redeveloped by Macdonald Communities Limited, and using 100% local builders, tradespeople and design consultants, Purcell Business Center marks an exceptionally rate opportunity to own the most highly functional and well located industrial real estate with complementary office and retail potential in the region.
            </p>
            <div>
              <p className='text-white text-base mt-4'>
                <span className='font-bold'>Occupancy: </span>
                Summer 2023
              </p>
              <p className='text-white text-base'>
                <span className='font-bold'>Sale Price: </span>
                See Unit Plans
              </p>
            </div>
            <div>&nbsp;</div>
            <div className='flex'>
              <button className='bg-brand uppercase px-4 py-2 tracking-wide mr-4'>Download bruchure</button>
              <button className='bg-brand uppercase px-4 py-2 tracking-wide'>Download unit plans</button>
            </div>
          </div>
        </div>
      </div>
      <div><h1>Video</h1></div>
      <BuildingFeatures ref={featuresRef} />
      <div className='h-[400px]' style={{
        backgroundImage: `url(/img/purcell-business-center-cross-section.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}></div>
    </div>
  );
}

export default App;
