import { slide as Menu } from 'react-burger-menu'
import { FC } from "react"

const RegisterButton: FC<{ children: string }> = props =>
  <button className='border-primary-light border ml-3 py-1 px-3 text-primary-light' {...props} />

const NavLink: FC<{ active?: boolean, children: string }> = ({ active, ...rest }) => {
  const colour = active ? 'text-primary' : 'text-primary-light'
  return <a className='text-base text-primary-light ml-3' {...rest} />
}

const Wordmark: FC = () =>
  <h1 className='py-2 px-4 text-white border-white border text-base uppercase tracking-widest'>Purcell Business Center</h1>

function Header() {
  return (
    <header className='bg-primary-dark'>
      <div className='py-4 container flex w-full mx-auto items-center justify-between'>
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
  )
}

export default Header