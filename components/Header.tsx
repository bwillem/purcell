import { slide as Menu } from 'react-burger-menu'
import { FC } from "react"
import Container from './Container'
import useStore from '@/store'

const RegisterButton: FC<{ children: string }> = (props) => {
  const { setActiveLinkId } = useStore(({ activeLinkId, setActiveLinkId }) =>
    ({ activeLinkId, setActiveLinkId }))

  const onClick = () => {
    document.getElementById(`register-section`)?.scrollIntoView({ behavior: 'smooth' })
    setActiveLinkId('register')
  }

  return <button
    onClick={onClick}
    className='border-primary-light border ml-3 py-1 px-3 text-primary-light hover:text-white hover:border-white transition-all hover:no-underline'
    {...props}
  />
}

const NavLink: FC<{ id: string, children: string }> = ({ id, ...rest }) => {
  const { activeLinkId, setActiveLinkId } = useStore(({ activeLinkId, setActiveLinkId }) =>
    ({ activeLinkId, setActiveLinkId }))

  const onClick = () => {
    document.getElementById(`${id}-section`)?.scrollIntoView({ behavior: 'smooth' })
    setActiveLinkId(id)
  }

  const colour = activeLinkId === id ? 'text-white' : 'text-primary-light'

  return <a
    id={id}
    className={`text-base ml-3 first:ml-0 ${colour}`}
    onClick={onClick}
    {...rest} />
}

const Wordmark: FC = () =>
  <img alt='purcell business center logo' src='/img/purcell_logo.png' />
// <h1 className='py-2 px-4 inline text-white border-white border text-base uppercase tracking-widest'>Purcell Business Center</h1>

function Header() {
  return (
    <div className='w-full fixed [z-index:9]'>
      <aside className="w-full bg-brand">
        <Container className="flex items-center justify-end">
          <div className='flex p-1'>
            <a href='/purcell-brochure.pdf' className='text-sm text-white' download>Download brochure</a>
            <p className='text-sm text-white px-2'>|</p>
            <a href='/purcell-unit-plans.pdf' className='text-sm text-white' download>Download unit plans</a>
          </div>
        </Container>
      </aside>
      <header className='bg-primary-dark'>
        <Container className='py-4 block xl:flex w-full items-center justify-between'>
          <div className='pt-0 pb-0 lg:pt-2 lg:pb-5 xl:pt-0 xl:pb-0 max-w-[200px]' >
            <Wordmark />
          </div>
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
            <NavLink id='home'>Home</NavLink>
            <NavLink id='features'>Building Features</NavLink>
            <NavLink id='location'>Location</NavLink>
            <NavLink id='value'>Value Proposition</NavLink>
            <NavLink id='ownership'>Ownership</NavLink>
            <NavLink id='financing'>Financing</NavLink>
            <NavLink id='project'>Project Team</NavLink>
            <RegisterButton>Register Now</RegisterButton>
          </nav>
        </Container>
      </header>
    </div>
  )
}

export default Header