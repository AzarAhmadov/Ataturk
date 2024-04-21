import { FC, useEffect, lazy, Suspense } from 'react'
const History = lazy(() => import('../../components/History/History'));
import Title from '../../common/Title/Title'
import Spinner from '../../components/Spinner/Spinner';
import { Family } from '../../data/data';
import { motion } from "framer-motion";

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
                                <Title title={el.title} />
                            </motion.div>
                            <History
                                
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
