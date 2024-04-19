import { FC } from 'react'
import Container from '../Container/Container'
import BackVideo from '../BackVideo/BackVideo'
import { motion } from "framer-motion";

const Hero: FC = () => {

    const Title = "Mustafa Kemal Atatürk".split(" ");
    const MiddleText = "Türkiyə Cümhuriyyəti öndəri".split(" ");
    const BottomText = " O, 57 illik həyatına 11 müharibə, 24 medal, 7 orden, 13 kitab, 1 ölkə və milyonlarla azad insan sığdıran böyük hərbçi, siyasət və dövlət xadimidir. Sevgi, hörmət, minnət və həsrətlə...".split(" ");

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
                                        delay: i / 7
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
                            src="https://agm.org.tr/wp-content/uploads/2021/12/1-2.jpg"
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
