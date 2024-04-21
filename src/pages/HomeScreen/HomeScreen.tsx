import { FC, useEffect, lazy, Suspense } from 'react'
import Hero from '../../components/Hero/Hero'
import Spinner from '../../components/Spinner/Spinner';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
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
            <MobileMenu />
        </>
    )
}

export default Home
