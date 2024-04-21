import { FC, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Life } from '../../data/data';
import Spinner from '../../components/Spinner/Spinner';
import Title from '../../common/Title/Title';
import { LifeText } from '../../types/types';

const History = lazy(() => import('../../components/History/History'));
const Books = lazy(() => import('../../components/Books/Books'));

const LifeScreen: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { t } = useTranslation();

    const lifeTexts: LifeText[] = [
        { t_1: t('life.life_text.t_1') },
        { t_2: t('life.life_text.t_2') },
        { t_3: t('life.life_text.t_3') },
        { t_4: t('life.life_text.t_4') },
        { t_5: t('life.life_text.t_5') },
        { t_6: t('life.life_text.t_6') },
        { t_7: t('life.life_text.t_7') },
        { t_8: t('life.life_text.t_8') },
        { t_9: t('life.life_text.t_9') },
        { t_10: t('life.life_text.t_10') },
        { t_11: t('life.life_text.t_11') },
        { t_12: t('life.life_text.t_12') },
        { t_13: t('life.life_text.t_13') },
    ];

    return (
        <main>
            <Suspense fallback={<Spinner />}>
                {Life.map((el, idx) => (
                    <div key={idx}>
                        <motion.div
                            className="card"
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 2,
                                },
                            }}
                            viewport={{ once: false }}
                        >
                            <Title title={t('life.title')} />
                        </motion.div>
                        <History text={lifeTexts} img={el.img} />
                    </div>
                ))}
                <motion.div
                    className="card"
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 2,
                        },
                    }}
                    viewport={{ once: false }}
                >
                    <Title title={t('life.book_title')} />
                </motion.div>
                <Books />
            </Suspense>
        </main>
    );
};

export default LifeScreen;
