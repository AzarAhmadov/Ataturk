import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Cards: FC = () => {
    return (
        <section className='cards'>
            <ul>
                <li>
                    <NavLink to={'/Ataturk/battles'}>
                        <img src="https://i.pinimg.com/474x/e8/a0/02/e8a00259a1bbd070d914a8469dc43249.jpg" alt={'Savaşları'} />
                        Döyüşləri
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/Ataturk/life'}>
                        <img src="https://cdn1.ntv.com.tr/gorsel/fg36gBPog06CntKJ9bXvSw.jpg?width=1000&mode=crop&scale=both" alt={'Savaşları'} />
                        Həyatı
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/Ataturk/family'}>
                        <img src="https://i.pinimg.com/736x/a1/49/62/a1496204a970b2ffc2f4f33fbe959429.jpg" alt={'Savaşları'} />
                        Ailəsi
                    </NavLink>
                </li>
            </ul>
        </section>
    )
}

export default Cards
