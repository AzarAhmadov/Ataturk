import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";

const Cards: FC = () => {
    return (
        <section className='cards'>
            <ul>
                <li>
                    <motion.div
                        className="card"
                        initial={{
                            opacity: 0,
                            x: 20
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
                            <img loading='lazy' src="https://i.pinimg.com/originals/1d/55/0d/1d550d819cec84dae8db96670b6557eb.jpg" alt={'Savaşları'} />
                            Döyüşləri
                        </NavLink>
                    </motion.div>
                </li>
                <li>
                    <motion.div
                        className="card"
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <NavLink to={'/Ataturk/life'}>
                            <img loading='lazy' src="https://im.haberturk.com/2020/11/09/2864508_84858c561431b84ce7655b9686fca86d_640x640.jpg" alt={'Savaşları'} />
                            Həyatı
                        </NavLink>
                    </motion.div>
                </li>
                <li>
                    <motion.div
                        className="card"
                        initial={{
                            opacity: 0,
                            x: -20
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
                        <NavLink to={'/Ataturk/family'}>
                            <img loading='lazy' src="https://i.pinimg.com/originals/8d/a3/46/8da34624c547972db9329337a2cf71c1.jpg" alt={'Savaşları'} />
                            Ailəsi
                        </NavLink>
                    </motion.div>
                </li>
            </ul>
        </section>
    )
}

export default Cards
