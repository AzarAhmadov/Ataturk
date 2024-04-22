import { FC, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Battles } from '../../data/data';
import Spinner from '../../components/Spinner/Spinner';
import Title from '../../common/Title/Title';
import { HistoryTextType } from '../../types/types';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
const History = lazy(() => import('../../components/History/History'));

const BattlesScreen: FC = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { t } = useTranslation();

    const battleTitles = [
        t('battles.war_1'),
        t('battles.war_2'),
        t('battles.war_3'),
        t('battles.war_4'),
        t('battles.war_5'),
        t('battles.war_6'),
        t('battles.war_7'),
        t('battles.war_8'),
        t('battles.war_9'),
    ];

    const warHistories: HistoryTextType[][] = [
        [
            { t_1: t('battles.battles_1.t_1') }
        ],
        [
            {
                t_1: t('battles.battles_2.t_1')
            },
            {
                t_2: t('battles.battles_2.t_2')

            },
            {
                t_3: t('battles.battles_2.t_3')

            }
        ],
        [
            {
                t_1: t('battles.battles_3.t_1')
            }
        ],
        [
            {
                t_1: t('battles.battles_4.t_1')
            },
            {
                t_2: t('battles.battles_4.t_2')
            },
            {
                t_3: t('battles.battles_4.t_3')
            },
        ],
        [
            {
                t_1: t('battles.battles_5.t_1')
            },
        ],
        [
            {
                t_1: t('battles.battles_6.t_1')
            },
            {
                t_2: t('battles.battles_6.t_2')
            },
            {
                t_3: t('battles.battles_6.t_3')
            },
        ],
        [
            {
                t_1: t('battles.battles_7.t_1')
            },
            {
                t_2: t('battles.battles_7.t_2')
            },
        ],
        [
            {
                t_1: t('battles.battles_8.t_1')
            },
        ],
        [
            {
                t_1: t('battles.battles_9.t_1')
            },
            {
                t_1: t('battles.battles_9.t_2')
            },
        ],
    ];

    return (
        <main>
            <Suspense fallback={<Spinner />}>
                {Battles.map((el, idx) => (
                    <>
                        <motion.div
                            key={idx}
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
                            <Title title={battleTitles[idx]} />
                        </motion.div>
                        <History text={warHistories[idx]} img={el.img} />
                    </>
                ))}
            </Suspense>
            <MobileMenu />
        </main>
    );
};

export default BattlesScreen;
