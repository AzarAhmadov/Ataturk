import { FC, useEffect, lazy, Suspense } from 'react'
import Hero from '../../components/Hero/Hero'
import Spinner from '../../components/Spinner/Spinner';
const CardsArea = lazy(() => import('../../components/CardsArea/CardsArea'));

const Home: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Hero />
            <Suspense fallback={<Spinner />}>
                <CardsArea />
            </Suspense>
        </>
    )
}

export default Home
