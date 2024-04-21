import { FC, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Family } from '../../data/data';
import Spinner from '../../components/Spinner/Spinner';
import Title from '../../common/Title/Title';
import { HistoryTextType } from '../../types/types';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
const History = lazy(() => import('../../components/History/History'));

const FamilyScreen: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { t } = useTranslation();

    const FamilyTextsMother: HistoryTextType[] = [
        { t_1: t('family.family_text_mother.t_1') },
        { t_2: t('family.family_text_mother.t_2') },
        { t_3: t('family.family_text_mother.t_3') },
    ];

    const FamilyTextsFather: HistoryTextType[] = [
        { t_1: t('family.family_text_father.t_1') },
        { t_2: t('family.family_text_father.t_2') },
    ];

    return (
        <main>
            <Suspense fallback={<Spinner />}>
                {Family.map((el, idx) => (
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
                            {idx === 0 && <Title title={t('family.mother')} />}
                        </motion.div>
                        {idx === 0 && <History text={FamilyTextsMother} img={el.img} />}
                        {idx === 1 && <History text={FamilyTextsFather} img={el.img} />}
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
                            {idx === 0 && <Title title={t('family.father')} />}
                        </motion.div>
                    </div>
                ))}
            </Suspense>
            <MobileMenu />
        </main>
    );
};

export default FamilyScreen;
