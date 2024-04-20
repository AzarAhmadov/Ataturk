import { FC, useEffect, lazy, Suspense } from 'react'
const History = lazy(() => import('../../components/History/History'));
import Title from '../../common/Title/Title'
import Books from '../../components/Books/Books'
import Spinner from '../../components/Spinner/Spinner';
import { Life } from '../../data/data';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const LifeScreen: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { t } = useTranslation()

    return (
        <main>
            <Suspense fallback={<Spinner />}>
                {
                    Life.map((el, idx) => (
                        <div key={idx}>
                            <motion.div
                                className="card"
                                initial={{
                                    opacity: 0,
                                    scale: 0.90,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 2
                                    }
                                }}
                                viewport={{ once: false }}
                            >
                                <Title title={t('life.title')} />
                            </motion.div>
                            <History
                                text={el.text.content}
                                img={el.img}
                            />
                        </div>
                    ))
                }
                <motion.div
                    className="card"
                    initial={{
                        opacity: 0,
                        scale: 0.90,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 2
                        }
                    }}
                    viewport={{ once: false }}
                >
                    <Title title={t('life.book_title')} />
                </motion.div>
                <Books />
            </Suspense>
        </main>
    )
}

export default LifeScreen
