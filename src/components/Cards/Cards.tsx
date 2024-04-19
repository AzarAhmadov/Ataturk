import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";
import BattlesImg from '../../../public/images/battles.jpeg'
import LifeImg from '../../../public/images/life.jpeg'
import FamilysImg from '../../../public/images/family.jpeg'
import { useTranslation } from 'react-i18next';

const Cards: FC = () => {

    const { t } = useTranslation();

    return (
        <section className='cards'>
            <ul>
                <li>
                    <motion.div
                        className="card"
                        initial={{
                            opacity: 0,
                            x: 25
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <NavLink to={'/Ataturk/battles'}>
                            <img loading='lazy' src={BattlesImg} alt={`Atatürk'ün Döyüşləri`} />
                            {t('about_cards.battles')}
                        </NavLink>
                    </motion.div>
                </li>
                <li>
                    <motion.div
                        className="card"
                        initial={{
                            scale: 0.93
                        }}
                        whileInView={{
                            scale: 1,
                            transition: {
                                duration: 2
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <NavLink to={'/Ataturk/life'}>
                            <img loading='lazy' src={LifeImg} alt={`Atatürk'ün həyatı`} />
                            {t('about_cards.life')}
                        </NavLink>
                    </motion.div>
                </li>
                <li>
                    <motion.div
                        className="card"
                        initial={{
                            x: -25
                        }}
                        whileInView={{
                            x: 0,
                            transition: {
                                duration: 2
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <NavLink to={'/Ataturk/family'}>
                            <img loading='lazy' src={FamilysImg} alt={`Atatürk'ün ailəsi`} />
                            {t('about_cards.family')}
                        </NavLink>
                    </motion.div>
                </li>
            </ul>
        </section>
    )
}

export default Cards
