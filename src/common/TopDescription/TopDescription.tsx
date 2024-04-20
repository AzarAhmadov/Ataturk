import { FC, memo } from 'react'
import { TopDescriptionProps } from '../../types/types'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const TopDescription: FC<TopDescriptionProps> = ({ title, desc1, desc2, img1, img2 }) => {

    const { t } = useTranslation()

    return (
        <section className='top-detail'>
            <div className="row">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    key={title}
                >
                    {
                        title &&
                        <h2>
                            {t(title)}
                        </h2>
                    }
                    {
                        desc1 &&
                        <p>
                            {t(desc1)}
                        </p>
                    }
                    {
                        desc2 &&
                        <p className='bottom-txt'>
                            {t(desc2)}
                        </p>
                    }
                </motion.div>

                <motion.div className='img-row'
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    key={img1}
                >
                    <div>
                        <LazyLoadImage
                            alt={'Mustafa Kamal Atatürk'}
                            effect="blur"
                            wrapperProps={{
                                style: { transitionDelay: "100ms" },
                            }}
                            src={img1}
                        />
                    </div>
                    <div>
                        <LazyLoadImage
                            alt={'Mustafa Kamal Atatürk'}
                            effect="blur"
                            wrapperProps={{
                                style: { transitionDelay: "100ms" },
                            }}
                            src={img2}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default memo(TopDescription)
