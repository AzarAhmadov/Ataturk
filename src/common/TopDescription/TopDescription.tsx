import { FC, memo } from 'react'
import { TopDescriptionProps } from '../../types/types'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from "framer-motion";

const TopDescription: FC<TopDescriptionProps> = ({ title, desc1, desc2, img1, img2 }) => {

    return (
        <section className='top-detail'>
            <div className="row">
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    key={title}
                >
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {desc1}
                    </p>
                    {
                        desc2 && <p className='bottom-txt'>
                            {desc2}
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
