import { FC } from 'react'
import Cards from '../Cards/Cards'
import signature from '../../../public/images/signature.png'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const CardsArea: FC = () => {

    const { t } = useTranslation();

    return (
        <section id='About' className='cards-area'>
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
                viewport={{ once: true }}
            >
                <img src={signature} alt={'imza'} />
            </motion.div>
            <Cards />
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
                viewport={{ once: true }}
            >
                <p className='text'>
                    "
                    {t('words.text')}
                    "
                </p>
            </motion.div>
        </section >
    )
}

export default CardsArea
