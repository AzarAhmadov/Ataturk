import { FC } from 'react'
import HeroImg from '../../../public/images/Hero.jpeg'
import Container from '../Container/Container'
import BackVideo from '../BackVideo/BackVideo'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Hero: FC = () => {

    const { t } = useTranslation();

    const titleTranslation = t("hero.top_title");
    const Title = titleTranslation.split(" ");

    const middleTranslation = t("hero.middle");
    const MiddleText = middleTranslation.split(" ");

    const bottomTranslation = t("hero.bottom");
    const BottomText = bottomTranslation.split(" ");

    return (
        <Container>
            <section className='hero'>
                <div className="hero-row">
                    <div className="left">
                        <h1>
                            {Title.map((el, i) => (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: i / 4
                                    }}
                                    key={i}
                                >
                                    {el}{" "}
                                </motion.span>
                            ))}
                        </h1>
                        <h2>
                            {MiddleText.map((el, i) => (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: i / 4
                                    }}
                                    key={i}
                                >
                                    {el}{" "}
                                </motion.span>
                            ))}
                        </h2>
                        <p className='bottom-txt'>
                            {BottomText.map((el, i) => (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: i / 10
                                    }}
                                    key={i}
                                >
                                    {el}{" "}
                                </motion.span>
                            ))}
                        </p>
                    </div>
                    <motion.div
                        className="right"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.img
                            src={HeroImg}
                            alt="Mustafa Kemal Atatürk"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </motion.div>
                </div>
            </section>

            <BackVideo />

            <div className='arrow'>
                <a href='#About'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z"></path><path d="m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z"></path></svg>
                </a>
            </div>
        </Container>
    )
}

export default Hero
