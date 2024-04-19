import { FC, useEffect, lazy, Suspense } from 'react'
const History = lazy(() => import('../../components/History/History'));
import Title from '../../common/Title/Title'
import Spinner from '../../components/Spinner/Spinner';
import { Family } from '../../data/data';

const FamilyScreen: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <Suspense fallback={<Spinner />}>
                {
                    Family.map((el, idx) => (
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

export default FamilyScreen
