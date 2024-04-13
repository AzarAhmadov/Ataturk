import { FC } from 'react'
import Hero from '../../components/Hero/Hero'
import CardsArea from '../../components/CardsArea/CardsArea'

const Home: FC = () => {
    return (
        <section>
            <Hero />
            <CardsArea />
        </section>
    )
}

export default Home
