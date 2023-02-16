import {
  FC,
  MutableRefObject,
  useEffect,
  useState,
  useRef,
} from 'react';
import './App.css';
import HeroSection from './HeroSection';

const RegisterButton: FC<{ children: string }> = props =>
  <button className='border-primary-light border ml-3 py-1 px-3 text-primary-light' {...props} />

const NavLink: FC<{ active?: boolean, children: string }> = ({ active, ...rest }) => {
  const colour = active ? 'text-primary' : 'text-primary-light'
  return <a className='text-base text-primary-light ml-3' {...rest} />
}

const Wordmark: FC = () =>
  <h1 className='py-2 px-4 text-white border-white border text-base uppercase tracking-widest'>Purcell Business Center</h1>

interface UseIntersectionObserver {
  containerRef: MutableRefObject<HTMLDivElement>,
  cb: any,
  opts?: {
    root: any,
    rootMargin: string,
    threshold: number,
  },
}

function useIntersectionObserver({ containerRef, cb, opts }: UseIntersectionObserver) {
  const _opts = opts || {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(cb, _opts)

    if (containerRef.current && cb) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, cb])
}

interface Section {
  containerRef: MutableRefObject<HTMLDivElement>,
  id: string,
}

function useTrackPagePosition(sections: Array<Section>) {
  const [activeSectioin, setActiveSection] = useState<string | null>(null)
  const observerCb = (id: string) => () => setActiveSection(id)

  /**
   * loop over ref, create an intersection observer for each one
   */
  useEffect(() => {
    if (!sections?.length) return
    sections.map(({ containerRef, id }) => {
      useIntersectionObserver({ containerRef, cb: observerCb(id) })
    })
  }, [sections?.length])

}

function App() {
  const homeRef = useRef(HtmlD)
  useTrackPagePosition()
    
  return (
    <div>
      <aside>
        <div className="w-full bg-brand">
          <div className="container flex items-center justify-end">
            <div className='flex p-1'>
              <a className='text-sm text-white'>Download brochure</a>
              <p className='text-sm text-white px-2'>|</p>
              <a className='text-sm text-white'>Download unit plans</a>
            </div>
          </div>
        </div>
      </aside>
      <header className='bg-primary-dark'>
        <div className='py-4 container flex w-full mx-auto items-center justify-between'>
          <Wordmark />
          <nav className='flex items-center'>
            <NavLink>Home</NavLink>
            <NavLink>Building Features</NavLink>
            <NavLink>Location</NavLink>
            <NavLink>Value Proposition</NavLink>
            <NavLink>Ownership</NavLink>
            <NavLink>Financing</NavLink>
            <NavLink>Project Team</NavLink>
            <RegisterButton>Register Now</RegisterButton>
          </nav>
        </div>
      </header>
      <HeroSection />
    </div>
  );
}

export default App;
