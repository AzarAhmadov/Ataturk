import { FC, useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import CardsArea from '../../components/CardsArea/CardsArea'

const Home: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Hero />
            <CardsArea />
        </>
    )
}

export default Home
