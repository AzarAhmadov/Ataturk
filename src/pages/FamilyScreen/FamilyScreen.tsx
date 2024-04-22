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

    const lifeTitles = [
        t('family.mother'),
        t('family.father'),
    ];

    const warHistories: HistoryTextType[][] = [
        [
            { t_1: t('family.family_text_mother.t_1') },
            { t_2: t('family.family_text_mother.t_2') },
            { t_3: t('family.family_text_mother.t_3') },
        ],
        [
            { t_1: t('family.family_text_father.t_1') },
            { t_1: t('family.family_text_father.t_2') },
        ]
    ];

    return (
        <main>
            <Suspense fallback={<Spinner />}>
                {Family.map((el, idx) => (
                    <>
                        <motion.div
                            className="card"
                            key={idx}
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
                            <Title title={lifeTitles[idx]} />
                        </motion.div>

                        <History text={warHistories[idx]} img={el.img} />
                    </>
                ))}
            </Suspense>
            <MobileMenu />
        </main>
    );
};

export default FamilyScreen;
