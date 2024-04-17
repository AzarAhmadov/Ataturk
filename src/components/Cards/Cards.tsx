import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Cards: FC = () => {
    return (
        <section className='cards'>
            <ul>
                <li>
                    <NavLink to={'/Ataturk/battles'}>
                        <img loading='lazy' src="https://i.pinimg.com/originals/1d/55/0d/1d550d819cec84dae8db96670b6557eb.jpg" alt={'Savaşları'} />
                        Döyüşləri
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/Ataturk/life'}>
                        <img loading='lazy' src="https://im.haberturk.com/2020/11/09/2864508_84858c561431b84ce7655b9686fca86d_640x640.jpg" alt={'Savaşları'} />
                        Həyatı
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/Ataturk/family'}>
                        <img loading='lazy' src="https://i.pinimg.com/originals/8d/a3/46/8da34624c547972db9329337a2cf71c1.jpg" alt={'Savaşları'} />
                        Ailəsi
                    </NavLink>
                </li>
            </ul>
        </section>
    )
}

export default Cards
