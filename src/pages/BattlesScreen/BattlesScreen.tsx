import { FC, useEffect, lazy, Suspense } from 'react'
const History = lazy(() => import('../../components/History/History'));
import Title from '../../common/Title/Title'
import Spinner from '../../components/Spinner/Spinner';
import { Battles } from '../../data/data';

const BattlesScreen: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <Suspense fallback={<Spinner />}>
                {
                    Battles.map((el, idx) => (
                        <div key={idx}>
                            <Title title={el.title} />
                            <History
                                text={el.text.content}
                                img={el.img}
                            />
                        </div>
                    ))
                }
            </Suspense>
        </main>
    )
}

export default BattlesScreen
