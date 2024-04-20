import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from '../Container/Container'
import { useTranslation } from 'react-i18next'

const Header: FC = () => {

    const { t } = useTranslation()

    return (
        <header>
            <Container>
                <div className="header-row">
                    <Link to={'/'}>
                        <img src="https://baku.meb.gov.tr/meb_iys_dosyalar/2020_05/18221404_2468854_810x458.jpg" alt="" />
                    </Link>
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
                </div>
            </Container>
        </header>
    )
}

export default Header
