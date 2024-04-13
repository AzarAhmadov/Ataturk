import { FC } from 'react'
import Hero from '../../components/Hero/Hero'
import CardsArea from '../../components/CardsArea/CardsArea'

const Home: FC = () => {
    return (
        <main>
            <Hero />
            <CardsArea />
        </main>
    )
}

export default Home
