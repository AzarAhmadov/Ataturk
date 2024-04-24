import { FC, useEffect, lazy } from 'react'
import Hero from '../../components/Hero/Hero'
const CardsArea = lazy(() => import('../../components/CardsArea/CardsArea'));

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
