import { FC, useEffect, lazy, Suspense } from 'react'
const History = lazy(() => import('../../components/History/History'));
import Title from '../../common/Title/Title'
import Books from '../../components/Books/Books'
import Spinner from '../../components/Spinner/Spinner';
import { Life } from '../../data/data';

const LifeScreen: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <Suspense fallback={<Spinner />}>
                {
                    Life.map((el, idx) => (
                        <div key={idx}>
                            <Title title={el.title} />
                            <History
                                text={el.text.content}
                                img={el.img}
                            />
                        </div>
                    ))
                }
                <Title title={`Mustafa Kemal Atatürk’ün yazdığı kitaplar`} />
                <Books />
            </Suspense>
        </main>
    )
}

export default LifeScreen
