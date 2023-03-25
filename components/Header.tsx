import { slide as Menu } from 'react-burger-menu'
import { FC } from "react"
import Container from './Container'

const RegisterButton: FC<{ children: string, href: string }> = props =>
  <a
    className='border-primary-light border ml-3 py-1 px-3 text-primary-light hover:text-white hover:border-white transition-all hover:no-underline'
    {...props}
  />

const NavLink: FC<{ active?: boolean, children: string, href: string }> = ({ active, ...rest }) => {
  const colour = active ? 'text-white' : 'text-primary-light'
  return <a className={`text-base ml-3 ${colour}`} {...rest} />
}

const Wordmark: FC = () =>
  <h1 className='py-2 px-4 text-white border-white border text-base uppercase tracking-widest'>Purcell Business Center</h1>

function Header({ activeSection = '' }) {
  return (
    <div className='w-full fixed [z-index:9]'>
      <aside className="w-full bg-brand">
        <Container className="flex items-center justify-end">
          <div className='flex p-1'>
            <a className='text-sm text-white'>Download brochure</a>
            <p className='text-sm text-white px-2'>|</p>
            <a className='text-sm text-white'>Download unit plans</a>
          </div>
        </Container>
      </aside>
      <header className='bg-primary-dark'>
        <Container className='py-4 flex w-full items-center justify-between'>
          <Wordmark />
          <div className='lg:hidden'>
            <Menu right>
              <a href='#home'>Home</a>
              <a href='#features'>Building Features</a>
              <a href='#location'>Location</a>
              <a href='#value'>Value Proposition</a>
              <a href='#ownership'>Ownership</a>
              <a href='#financing'>Financing</a>
              <a href='#project'>Project Team</a>
              <a href='#register'>Register Now</a>
            </Menu>
          </div>
          <nav className='flex items-center hidden lg:block'>
            <NavLink href='#home' active={activeSection === 'home'}>Home</NavLink>
            <NavLink href='#features' active={activeSection === 'features'}>Building Features</NavLink>
            <NavLink href='#location' active={activeSection === 'location'}>Location</NavLink>
            <NavLink href='#value' active={activeSection === 'value'}>Value Proposition</NavLink>
            <NavLink href='#ownership' active={activeSection === 'ownership'}>Ownership</NavLink>
            <NavLink href='#financing' active={activeSection === 'financing'}>Financing</NavLink>
            <NavLink href='#project' active={activeSection === 'project'}>Project Team</NavLink>
            <RegisterButton href='#register'>Register Now</RegisterButton>
          </nav>
        </Container>
      </header>
    </div>
  )
}

export default Header