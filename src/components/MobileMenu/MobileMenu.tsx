import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const MobileMenu: FC = () => {

    const { t } = useTranslation()

    return (
        <nav className='mobile-menu'>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={'/Ataturk/battles'}>
                        {t('about_cards.battles')}
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={'/Ataturk/life'}>
                        {t('about_cards.life')}
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={'/Ataturk/family'}>
                        {t('about_cards.family')}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MobileMenu
