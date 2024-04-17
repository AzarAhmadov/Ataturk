import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const MobileMenu: FC = () => {
    return (
        <nav className='mobile-menu'>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={'/Ataturk/battles'}> Döyüşləri </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={'/Ataturk/life'}> Həyatı </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={'/Ataturk/family'}> Ailəsi </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MobileMenu
