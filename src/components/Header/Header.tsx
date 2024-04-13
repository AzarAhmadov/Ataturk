import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header: FC = () => {
    return (
        <header>
            <div className="header-row">
                <Link to={'/Ataturk'}>
                    <img src="https://baku.meb.gov.tr/meb_iys_dosyalar/2020_05/18221404_2468854_810x458.jpg" alt="" />
                </Link>
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
            </div>
        </header>
    )
}

export default Header
