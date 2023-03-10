import { slide as Menu } from 'react-burger-menu'
import { FC } from "react"
import Container from './Container'

const RegisterButton: FC<{ children: string }> = props =>
  <button className='border-primary-light border ml-3 py-1 px-3 text-primary-light' {...props} />

const NavLink: FC<{ active?: boolean, children: string }> = ({ active, ...rest }) => {
  const colour = active ? 'text-white' : 'text-primary-light'
  return <a className={`text-base ml-3 ${colour}`} {...rest} />
}

const Wordmark: FC = () =>
  <h1 className='py-2 px-4 text-white border-white border text-base uppercase tracking-widest'>Purcell Business Center</h1>

function Header({ activeSection = '' }) {
  return (
    <div className='w-full fixed [z-index:9]'>
      <aside>
        <div className="w-full bg-brand">
          <Container className="flex items-center justify-end">
            <div className='flex p-1'>
              <a className='text-sm text-white'>Download brochure</a>
              <p className='text-sm text-white px-2'>|</p>
              <a className='text-sm text-white'>Download unit plans</a>
            </div>
          </Container>
        </div>
      </aside>
      <header className='bg-primary-dark'>
        <Container className='py-4 flex w-full items-center justify-between'>
          <Wordmark />
          <div className='lg:hidden'>
            <Menu right>
              <a>Home</a>
              <a>Building Features</a>
              <a>Location</a>
              <a>Value Proposition</a>
              <a>Ownership</a>
              <a>Financing</a>
              <a>Project Team</a>
              <a>Register Now</a>
            </Menu>
          </div>
          <nav className='flex items-center hidden lg:block'>
            <NavLink active={activeSection === 'home'}>Home</NavLink>
            <NavLink active={activeSection === 'features'}>Building Features</NavLink>
            <NavLink active={activeSection === 'location'}>Location</NavLink>
            <NavLink active={activeSection === 'value'}>Value Proposition</NavLink>
            <NavLink active={activeSection === 'ownership'}>Ownership</NavLink>
            <NavLink active={activeSection === 'financing'}>Financing</NavLink>
            <NavLink active={activeSection === 'project'}>Project Team</NavLink>
            <RegisterButton>Register Now</RegisterButton>
          </nav>
        </Container>
      </header>
    </div>
  )
}

export default Header